import React,{ useRef ,useEffect, useState } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';
import { eventBus } from '../services/eventBusService';

export function MyAudioPlayer(props) {
    const audioPlayer = useRef(null);
    const [token, setToken] = useState('');

    useEffect(() => {
        const tokenData = getEncryptedToken('32e4f4a3-666b-4419-8945-5a060bb777fb');
        setToken(tokenData);
        // console.log(props);
        // console.log(audioPlayer.current);
    }, []);
    
    const getEncryptedToken = (token) => {
        let date = new Date();
        let utcTime = `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`
        let stringToEncrypt = `${token}===${utcTime}`
        return btoa(stringToEncrypt)
    }

    const onGetTrackPause = ()=> {
        props.onPauseTrack(false)
    }


    return (
        <div className="audio-player-container">
            <AudioPlayer
                ref={audioPlayer}
                className="audio-player"
                showSkipControls={true}
                showJumpControls={false}
                // src={require('../assets/1.mp3').default}
                src={`https://api.sprintt.co/spotify/play/${props.trackId}?access=${token}`}
                customAdditionalControls={[]}
                layout="stacked-reverse"
                customIcons={{
                    play : <img src={require('../assets/controller_icons/Play.svg').default} />,
                    pause : <img src={require('../assets/controller_icons/pause.svg').default} />,
                    volume : <img src={require('../assets/volume.png').default} />,
                    next: <img src={require('../assets/controller_icons/next.svg').default} title="next song" alt="next song" />,
                    previous: <img className="prev-btn" title="previous song" alt="previous song" src={require('../assets/controller_icons/prev.svg').default} />,
                  }}
                onPlay={e => props.onPauseTrack(true)}
                onPause={e=>onGetTrackPause()}
                showFilledVolume={true}
                onClickPrevious={e=>{eventBus.emit('prev')}}
                onClickNext={e=>{eventBus.emit('next')}}
                onEnded={e=>{eventBus.emit('next')}}
                />
        </div>
    )
}
