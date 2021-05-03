import React, { useState, useEffect } from 'react';
import { GenrePageHeader } from '../CMPs/GenrePageHeader';
import { localStorageService } from '../services/localStorageService';
import { playListService } from '../services/playListService';
import { PlayListPreview } from '../CMPs/PlayListPreview';


export function GenrePage() {

    const [genreDetailes, setGeneDetailes] = useState({});
    const [genrePlaylists, setGenrePlaylists] = useState([]);

    useEffect(() => {
        const localData = localStorageService.loadFromStorage('genre')
        setGeneDetailes(localData);
        getGenrePlaylists(localData.category_id);
    }, []);

    const getGenrePlaylists = async (id) => {
        const resData = await playListService.getAllGenrePlaylists(id);
        setGenrePlaylists(resData)
        console.log(resData);
    }

    if (genrePlaylists.length === 0) return <div>Loading</div>
    return (
        <React.Fragment>
           <div className='genre-playlists-container flex'>
           {genrePlaylists.map(playlist => <PlayListPreview key={playlist.playlist_id} playlist={playlist} />)}
           </div>
            <GenrePageHeader playlistsLength={genrePlaylists.length} genreImg={genreDetailes.image_url} genreName={genreDetailes.category_name} />
        </React.Fragment>

    )
}
