import React,{useState,useEffect} from 'react';
import { PlaylistHeader } from '../CMPs/PlaylistHeader';
import { playListService } from '../services/playListService';
import { SongsTable } from '../CMPs/SongsTable';

export function Playlist(props) {

        const [songs,setSongs] = useState([]);
        const [flag, setFlag] = useState(false)

        useEffect(() => {
        onGetSongs(props.match.params.id)
        }, [flag]);


       const onGetSongs = async (id)=> {
           const songsData =await playListService.getSongs(`playlist_tracks/${id}`);
           setSongs(songsData);
       } 

       const onLiked = async(trackObj) => {
        console.log(trackObj);
        await playListService.changeLikedStatus(trackObj);
        setFlag(!flag);
    }

       if(songs.length===0) return <div>Loading</div>

    return (
        <div className="playlist-page-container app-wrapper2">
            <PlaylistHeader tracksAmount={songs.playlist_tracks} duration={songs.playlist_duration}  />
            <SongsTable songs={songs} onLiked={onLiked} />
        </div>
    )
}
