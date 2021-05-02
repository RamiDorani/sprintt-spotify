import React, { useState, useEffect } from 'react';
import { PlaylistHeader } from '../CMPs/PlaylistHeader';
import { playListService } from '../services/playListService';
import { SongsTable } from '../CMPs/SongsTable';

export function Playlist(props) {

    const [songs, setSongs] = useState([]);
    const [flag, setFlag] = useState(false);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        onGetSongs(props.match.params.id)
    }, [flag]);


    const onGetSongs = async (id) => {
        const songsData = await playListService.getSongs(`playlist_tracks/${id}`);
        console.log(songsData);
        setSongs(songsData);
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
        const filtered = songs.tracks.filter(track =>
                track.album_name.toLowerCase().includes(filter.toLowerCase()) || track.artists_names.toLowerCase().includes(filter.toLowerCase()) || track.name.toLowerCase().includes(filter.toLowerCase()) || track.release_date.includes(filter)
            );
            return filtered
    }

    if (songs.length === 0) return <div>Loading</div>
    const filteredTracks = getTracksFiltered();
    return (
        <div className="playlist-page-container app-wrapper2">
            <PlaylistHeader tracksAmount={songs.playlist_tracks} duration={songs.playlist_duration} />
            <label className="filter-label" htmlFor="filter"><img src={require('../assets/search.png').default} alt="" /></label>
            <input className="filter" id="filter" name="filter" value={filter} onChange={onHandleINputChange} type="text" placeholder="Filter" />
            <SongsTable songs={filteredTracks} playlistId={props.match.params.id} onLiked={onLiked} />
        </div>
    )
}
