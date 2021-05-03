import React,{useEffect,useState} from 'react';
import { GenresList } from '../CMPs/GenresList';
import { playListService } from '../services/playListService';

export function Browse() {

    const [genres,setGenres] = useState([])

    useEffect(()=> {
        let mounted = true;
        if(mounted) getGenres();
        return () => mounted=false;
    },[]);

    const getGenres = async () => {
        const resData = await playListService.getcatagories();
        setGenres(resData.categories) 
    }

    if(genres.length===0) return <div>Loading</div>
    return (
        <div className="main-container genres-page-container">
            <h3>Genres</h3>
            <GenresList genres={genres} />
        </div>
    )
}
