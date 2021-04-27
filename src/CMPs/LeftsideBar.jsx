import React,{useState,useEffect} from 'react';
import { localStorageService } from '../services/localStorageService';

export  function LeftsideBar(props) {
    const [playlistImg,setPlaylistImg] = useState([]);

    useEffect(()=>{
        console.log(props);
        const localData = localStorageService.loadFromStorage('current-playlist');
        console.log(localData[0].image_url);
        setPlaylistImg(localData)
    },[]);

    if(playlistImg.length===0) return <div>Loading</div>
    return (
        <div className="left-side-container flex">
          <img src={playlistImg[0].image_url} alt=""/>
            <div className="left-side-data flex-col">
                <h3>{props.songTitle}</h3>
                <h4>{props.albumName}</h4>
            </div>
        </div>
    )
}
