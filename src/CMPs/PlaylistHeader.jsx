import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from 'react-router-dom';
import { loadRecentlyPlayed, loadFeaturedPlylists, loadMoodPlylists } from '../store/actions/playlistsAction';
import { localStorageService } from '../services/localStorageService';

function _PlaylistHeader(props) {


    const dispatch = useDispatch();
    const recentlyPlayedPlaylists = useSelector(state => state.playlistsReducer.recentlyPlayedPlaylist);
    const featuredPlaylists = useSelector(state => state.playlistsReducer.featuredPlaylists);
    const moodPlayedPlaylists = useSelector(state => state.playlistsReducer.moodPlaylists);
    const [singlePlaylist, setSinglePlaylist] = useState([]);



    useEffect(() => {
        const { id } = props.match.params;
        const localData = localStorageService.loadFromStorage('current-playlist');
        if(localData&&localData[0].playlist_id==id) {
            setSinglePlaylist(localData)
        }
        else {
            loadPlaylists();
            getSinglePlaylist(id);
        }
        
    }, [featuredPlaylists])
    
    const loadPlaylists = () => {
        dispatch(loadRecentlyPlayed());
        dispatch(loadFeaturedPlylists());
        dispatch(loadMoodPlylists());
    }


    const getSinglePlaylist = (id) => {
        let matchPlaylist = [];
        
        if (recentlyPlayedPlaylists.playlists && recentlyPlayedPlaylists.playlists.length > 0) {
            matchPlaylist = recentlyPlayedPlaylists.playlists.filter(playlist => playlist.playlist_id == id);
            if(matchPlaylist.length > 0) {
                setSinglePlaylist(matchPlaylist);
                localStorageService.saveToStorage('current-playlist',matchPlaylist)
            }
        }

        if (featuredPlaylists.playlists && featuredPlaylists.playlists.length > 0) {
            const matchPlaylist = featuredPlaylists.playlists.filter(playlist => playlist.playlist_id == id)
            if(matchPlaylist.length > 0) {
                setSinglePlaylist(matchPlaylist);
                localStorageService.saveToStorage('current-playlist',matchPlaylist)
            }
        }

        if (moodPlayedPlaylists.playlists && moodPlayedPlaylists.playlists.length > 0) {
            const matchPlaylist = moodPlayedPlaylists.playlists.filter(playlist => playlist.playlist_id == id)
            if(matchPlaylist.length > 0) {
                setSinglePlaylist(matchPlaylist);
                localStorageService.saveToStorage('current-playlist',matchPlaylist)
            }
        }
    }



    const playlisyStyle = {
        backgroundImage: singlePlaylist.length > 0 ? 'url(' + singlePlaylist[0].image_url + ')' : ''
    };


    if (singlePlaylist.length === 0) return <div>Loading</div>
    return (
        <div style={playlisyStyle} className="playlist-header-container flex">
            <div className="black-layer">
            <div className="playlist-box1 flex-col">
                <h2>{singlePlaylist[0].name}</h2>
                <p>{singlePlaylist[0].description}</p>
            </div>
            <div className="playlist-box2 flex-col">
                <h3>{props.tracksAmount}</h3>
                <p>{props.duration}</p>
            </div>
            </div>
        </div>
    )
}


export const PlaylistHeader = withRouter(_PlaylistHeader)