import { classnames } from '@material-ui/data-grid';
import React, { useEffect, useState } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';

export function MyAudioPlayer({ trackId }) {
    const [token, setToken] = useState('');

    useEffect(() => {
        const tokenData = getEncryptedToken('32e4f4a3-666b-4419-8945-5a060bb777fb');
        setToken(tokenData)
        console.log(tokenData, trackId);
    }, []);

    const getEncryptedToken = (token) => {
        let date = new Date();
        let utcTime = `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`
        let stringToEncrypt = `${token}===${utcTime}`
        return btoa(stringToEncrypt)
    }

    return (
        <div className="audio-player-container">
            <AudioPlayer
                className="audio-player"
                autoPlay
                src={`https://api.sprintt.co/spotify/play/${trackId}?access=${token}`}
                customAdditionalControls={[]}
                layout="stacked-reverse"
                customIcons={{
                    play : <img src={require('../assets/controller_icons/Play.svg').default} />,
                    pause : <img src={require('../assets/controller_icons/pause.svg').default} />,
                    volume : <img src={require('../assets/volume.png').default} />,
                    forward: <img src={require('../assets/controller_icons/next.svg').default} />,
                    rewind: <img className="dsd" src={require('../assets/controller_icons/prev.svg').default} />,
                  }}
                onPlay={e => console.log("onPlay")}
                onClickNext={console.log('fkmkfnjf')}
            />
        </div>
    )
}
