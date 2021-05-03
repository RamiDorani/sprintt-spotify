import React, { useState, useEffect } from 'react';
import { LikesSongsHeader } from '../CMPs/LikedSongsHeader';
import { playListService } from '../services/playListService';
import { SongsTable } from '../CMPs/SongsTable';

export function LikedSongs() {

    const [likedTracks, setLikedTracks] = useState([]);
    const [flag, setFlag] = useState(false);
    const [filter, setFilter] = useState('');


    useEffect(() => {
        let mounted = true;
        if(mounted) getLikedTracks();
        return () => mounted=false;
    }, [flag])

    const getLikedTracks = async () => {
        const data = await playListService.getLikedSongs();
        console.log(data);
        setLikedTracks(data.liked_tracks)
    }

    const onLiked = async (trackObj) => {
        console.log(trackObj);
        await playListService.changeLikedStatus(trackObj);
        setFlag(!flag);
    }

    const onHandleINputChange = (ev) => {
        setFilter(ev.target.value);
    }

    const getTracksFiltered = () => {
        const filtered = likedTracks.filter(track =>
            track.album_name.toLowerCase().includes(filter.toLowerCase()) || track.artists_names.toLowerCase().includes(filter.toLowerCase()) || track.name.toLowerCase().includes(filter.toLowerCase()) || track.release_date.includes(filter)
        );
        return filtered
    }

    const filteredTracks = getTracksFiltered();
    return (
        <div className="main-container">
            <LikesSongsHeader numOfSongs={likedTracks.length} />
            <section className="liked-songs-table">
                <label className="filter-label" htmlFor="filter"><img src={require('../assets/search.png').default} alt="" /></label>
                <input className="filter" id="filter" name="filter" value={filter} onChange={onHandleINputChange} type="text" placeholder="Filter" />
                <SongsTable songs={filteredTracks} statImg={require('../assets/liked_songs.jpg').default} onLiked={onLiked} />
            </section>
        </div>
    )
}
