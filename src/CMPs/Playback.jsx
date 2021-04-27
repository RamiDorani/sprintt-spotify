import React from 'react';
import { LeftsideBar } from './LeftsideBar';
import { MyAudioPlayer } from './MyAudioPlayer';

export function Playback(props) {

    return (
        <div className="playback-container flex">
            <LeftsideBar songTitle={props.track.name} albumName={props.track.album_name} />
            <MyAudioPlayer trackId={props.track.track_id} />
        </div>
    )
}
