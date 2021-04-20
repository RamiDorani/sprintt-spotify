import React,{useState,useEffect} from 'react';
import { PlaylistCarousel } from '../CMPs/PlaylistCarousel';
import { playListService } from '../services/playListService';


export function HomePage() {
    const [playlists, setPlaylist] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const data = await playListService.query();
        setPlaylist(data)
    }
    if (!playlists) return <div>Loading...</div>
    return (
        <div className="homePage-container main-container flex-xol">
            <div className="div-carousel div-carousel1">
                <h3 className="playlist-title">Recently played</h3>
                <PlaylistCarousel playlists={playlists} />
            </div>
            <div className="div-carousel div-carousel2">
                <h3 className="playlist-title">Featured playlists</h3>
                <PlaylistCarousel playlists={playlists} />
            </div>
            <div className="div-carousel div-carousel3">
                <h3 className="playlist-title">mood</h3>
                <PlaylistCarousel playlists={playlists} />
            </div>
        </div>
    )
}
