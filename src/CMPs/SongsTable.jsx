import React, { useState, useEffect } from 'react';
import { Playback } from './Playback';


export function SongsTable({ songs, onLiked }) {

    const [currentItem, setCurrentItem] = useState(0);
    const [openPlayback, setOpenPlayback] = useState(false);
    const [currTrack, setCurrTrack] = useState({});


    const hoverdRow = (trackObj) => {
        setCurrentItem(trackObj.track_id)
    }


    const UnHoverdRow = () => {
        setCurrentItem(0)
    }

    const onOpenPlayback = (track) => {
        console.log(track);
        if (track !== currTrack) {
            setCurrTrack(track);
            setOpenPlayback(true)
        }else {
            setCurrTrack(track);
            setOpenPlayback(!openPlayback);
        }
    }


    return (
        <div className="flex-col">
            {openPlayback && <Playback track={currTrack} />}
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
                        <tr key={track.track_id} className="song-row" onMouseEnter={() => hoverdRow(track)}
                            onMouseLeave={() => UnHoverdRow(track)}>


                            <td><img onClick={() => onOpenPlayback(track)} className={currentItem === track.track_id ? "play-line-icon" : "disabled-icon"} src={openPlayback && currTrack.track_id === track.track_id ? require('../assets/pause_line_icon.png').default : require('../assets/play_line_icon.png').default} alt="" /></td>




                            <td><img className='like-icon' onClick={() => onLiked(track)} src={track.is_liked ? require('../assets/liked.png').default : require('../assets/liked_songs_icon.png').default} alt="" /></td>
                            <td className="tr-name">{track.name}</td>
                            <td>{track.artists_names}</td>
                            <td>{track.album_name}</td>
                            <td>{track.release_date}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}



// play_line_icon.png