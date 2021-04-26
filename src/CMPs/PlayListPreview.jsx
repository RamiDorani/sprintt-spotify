import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { savePlaylist } from '../store/actions/playlistsAction';



export function PlayListPreview({playlist}) {
    const dispatch = useDispatch();


    const savePlaylistDet = ()=> {
        dispatch(savePlaylist(playlist));
    } 

    return (
        <div className="PlayListPreview-container flex-col">
            <Link onClick={savePlaylistDet} to={`/playlist/${playlist.playlist_id}`}>
                <img src={playlist.image_url} alt="" />
                <div className="flex-col">
                    <h4>{playlist.name}</h4>
                    <p>{playlist.description}</p>
                </div>
            </Link>
        </div>
    )
}

