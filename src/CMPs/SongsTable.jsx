import React, { useState, useEffect } from 'react';
import { Playback } from './Playback';
import { eventBus } from '../services/eventBusService';
import { playListService } from '../services/playListService';


export function SongsTable({ songs, onLiked,playlistId,statImg }) {

    const [currentItem, setCurrentItem] = useState(0);
    const [openPlayback, setOpenPlayback] = useState(false);
    const [currTrack, setCurrTrack] = useState({});
    const [trackStatus,setTrackStatus] = useState(true);
   

    eventBus.on('next',() => {
        const idx = findTrackIndex();
        idx===songs.length-1 ? setCurrTrack(songs[idx]) : setCurrTrack(songs[idx+1]);
    });

    eventBus.on('prev',() => {
        const idx = findTrackIndex();
        idx===0 ? setCurrTrack(songs[0]) : setCurrTrack(songs[idx-1]);
    });
    

    const findTrackIndex = ()=> {
       return songs.findIndex(song => song.track_id === currTrack.track_id);
    }

    const hoverdRow = (trackObj) => {
        setCurrentItem(trackObj.track_id)
    }


    const UnHoverdRow = () => {
        setCurrentItem(0)
    }

    const onOpenPlayback = (track) => {
        // console.log(playlistId,track.track_id);
        if (track !== currTrack) { //if user clicks new track
            setCurrTrack(track);
            setOpenPlayback(true);
            if(playlistId) playListService.postRecentlyPlayed(playlistId,track.track_id)
        }else {
            setCurrTrack(track); //close the playback
            setTrackStatus(false);
            setOpenPlayback(!openPlayback);
        }
    }

    const onPauseTrack = (status)=> {
        setTrackStatus(status)
    }

    

    return (
        <div className="flex-col">
            {openPlayback && <Playback statImg={statImg?statImg:''} trackStatus={trackStatus} track={currTrack} onPauseTrack={onPauseTrack} />}
            <table className="table-container" >
                <thead>
                    <tr>
                        <th colSpan="3" className="title-tr">TITLE</th>
                        <th>ARTIST</th>
                        <th>ALBUM</th>
                        <th>RELEASE DATE</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map(track =>
                        <tr key={track.track_id}  className={(currTrack.track_id=== track.track_id)&&openPlayback? 'song-row-selected' : 'song-row'} onMouseEnter={() => hoverdRow(track)}
                            onMouseLeave={() => UnHoverdRow(track)} >


                            <td><img onClick={() => onOpenPlayback(track)} className={currentItem !== track.track_id ? "disabled-icon" : 'play-line-icon'} src={trackStatus&&openPlayback && currTrack.track_id === track.track_id ? require('../assets/pause_line_icon.png').default : require('../assets/play_line_icon.png').default} alt="" /></td>


                            <td><img className='like-icon' onClick={() => onLiked(track)} src={track.is_liked ? require('../assets/liked.png').default : require('../assets/liked_songs_icon.png').default} alt="" /></td>
                            <td onClick={() => onOpenPlayback(track)} className="tr-name">{track.name}</td>
                            <td onClick={() => onOpenPlayback(track)}>{track.artists_names}</td>
                            <td onClick={() => onOpenPlayback(track)}>{track.album_name}</td>
                            <td onClick={() => onOpenPlayback(track)}>{track.release_date}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}


