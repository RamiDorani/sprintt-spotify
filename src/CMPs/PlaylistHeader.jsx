import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from 'react-router-dom';
import { loadRecentlyPlayed, loadFeaturedPlylists, loadMoodPlylists } from '../store/actions/playlistsAction';

function _PlaylistHeader(props) {


    const dispatch = useDispatch();
    const recentlyPlayedPlaylists = useSelector(state => state.playlistsReducer.recentlyPlayedPlaylist);
    const featuredPlaylists = useSelector(state => state.playlistsReducer.featuredPlaylists);
    const moodPlayedPlaylists = useSelector(state => state.playlistsReducer.moodPlaylists);
    const [singlePlaylist, setSinglePlaylist] = useState([]);



    useEffect(() => {
        console.log(props);
        if (singlePlaylist.length !== 0) return
        else {
            loadPlaylists();
            const { id } = props.match.params;
            getSinglePlaylist(id);
        }
    }, [featuredPlaylists])



    const getSinglePlaylist = (id) => {
        const matchPlaylist = [];

        if (recentlyPlayedPlaylists.playlists && recentlyPlayedPlaylists.playlists.length > 0) {
            matchPlaylist = recentlyPlayedPlaylists.playlists.filter(playlist => playlist.playlist_id == id);
            matchPlaylist.length > 0 ? setSinglePlaylist(matchPlaylist) :console.log(matchPlaylist);
        }

        if (featuredPlaylists.playlists && featuredPlaylists.playlists.length > 0) {
            const matchPlaylist = featuredPlaylists.playlists.filter(playlist => playlist.playlist_id == id)
            matchPlaylist.length > 0 ? setSinglePlaylist(matchPlaylist) : console.log(matchPlaylist);
        }

        if (moodPlayedPlaylists.playlists && moodPlayedPlaylists.playlists.length > 0) {
            const matchPlaylist = moodPlayedPlaylists.playlists.filter(playlist => playlist.playlist_id == id)
            matchPlaylist.length > 0 ? setSinglePlaylist(matchPlaylist) :console.log(matchPlaylist);
        }
    }

    const loadPlaylists = () => {
        dispatch(loadRecentlyPlayed());
        dispatch(loadFeaturedPlylists());
        dispatch(loadMoodPlylists());
    }


    const playlisyStyle = {
        backgroundImage: singlePlaylist.length > 0 ? 'url(' + singlePlaylist[0].image_url + ')' : ''
    }


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