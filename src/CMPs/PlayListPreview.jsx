import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import { savePlaylist,saveSingleQuickTrack } from '../store/actions/playlistsAction';
import { Playback } from './Playback';
import { playListService } from '../services/playListService';




export function PlayListPreview({ playlist }) {

    const dispatch = useDispatch();
    const prevTrack = useSelector(state => state.playlistsReducer.quickSingleTrack);

    const [clickPlay, setClickPlay] = useState(false);
    const [hoverStatus, setHoverStatus] = useState(false);
    const [songs, setSongs] = useState([]);
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        getPlaylist();
    }, [])

    const getPlaylist = async () => {
        const songsData = await playListService.getSongs(`playlist_tracks/${playlist.playlist_id}`);
        setSongs(songsData.tracks);
    }

    const savePlaylistDet = () => {
        dispatch(savePlaylist(playlist));
    }

    const onClickPlay = () => {

        dispatch(saveSingleQuickTrack(songs[0])) //save the CURRENT palying track
        if(prevTrack!==songs[0]) { //if user clicks diffrent playlist
            setFlag(true)
            setClickPlay(true);
        } else { //if user clicks on the same playlist
           
            setFlag(!flag);
            setClickPlay(!clickPlay);
            
        }
    }

    const hoverImg = () => {
        setHoverStatus(true);
    }

    const unHoverImg = () => {
        setHoverStatus(false);
    }


    const onPauseTrack = (status) => {
        console.log(status);
        setFlag(status);
    }

    return (
        <React.Fragment>
            <div className="PlayListPreview-container flex-col">
                <section className="imgs-section" onClick={onClickPlay} onMouseEnter={hoverImg} onMouseLeave={unHoverImg} >
                    <img className={hoverStatus ? 'dark-mode' : ''} src={playlist.image_url} />
                    <img 
                        className={hoverStatus ? 'visible-icon' : 'quick-play-container'}
                        src={flag&&prevTrack===songs[0]&&clickPlay ? require('../assets/white_pause_line_icon.png').default : require('../assets/white_play_line_icon.png').default} />
                </section>
                <Link onClick={savePlaylistDet} to={`/playlist/${playlist.playlist_id}`}>
                    <div className="flex-col">
                        <h4>{playlist.name}</h4>
                        <p>{playlist.description}</p>
                    </div>
                </Link>
            </div>
            {clickPlay&&prevTrack===songs[0] && <Playback statImg={playlist.image_url} trackStatus={clickPlay} track={songs[0]} onPauseTrack={onPauseTrack} />}
        </React.Fragment>
    )
}

