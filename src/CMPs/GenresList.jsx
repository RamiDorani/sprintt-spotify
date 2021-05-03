import React,{useState,useEffect} from 'react';
import { GenresPreview } from '../CMPs/GenresPreview';

export function GenresList({genres}) {
    useEffect(()=> {
        console.log(genres);
    },[])
    return (
        <div className="genres-list-container">
            {genres.map(genre => <GenresPreview key={genre.category_id} genre={genre} />)}
            {genres.map(genre => <GenresPreview key={genre.category_id} genre={genre} />)}
        </div>
    )
}
