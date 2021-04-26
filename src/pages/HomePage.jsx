import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { PlaylistCarousel } from '../CMPs/PlaylistCarousel';
import { loadRecentlyPlayed, loadFeaturedPlylists, loadMoodPlylists } from '../store/actions/playlistsAction';


export function HomePage() {
    const dispatch = useDispatch();
    const recentlyPlayedPlaylists = useSelector(state => state.playlistsReducer.recentlyPlayedPlaylist);
    const featuredPlaylists = useSelector(state => state.playlistsReducer.featuredPlaylists);
    const moodPlayedPlaylists = useSelector(state => state.playlistsReducer.moodPlaylists);
    

    useEffect(() => {
        dispatch(loadRecentlyPlayed());
        dispatch(loadFeaturedPlylists());
        dispatch(loadMoodPlylists());
        console.log(featuredPlaylists);
        
    }, []);


    if (recentlyPlayedPlaylists.length === 0 || featuredPlaylists.length === 0 || moodPlayedPlaylists.length === 0) return <div>Loading...</div>
    return (
        <div className="homePage-container main-container flex-xol">
            <div className="div-carousel div-carousel1">
                <h3 className="playlist-title">Recently played</h3>
                <PlaylistCarousel playlists={recentlyPlayedPlaylists} />
            </div>
            <div className="div-carousel div-carousel2">
                <h3 className="playlist-title">Featured playlists</h3>
                <PlaylistCarousel playlists={featuredPlaylists} />
            </div>
            <div className="div-carousel div-carousel3">
                <h3 className="playlist-title">mood</h3>
                <PlaylistCarousel playlists={moodPlayedPlaylists} />
            </div>
        </div>
    )
}
