import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { localStorageService } from '../services/localStorageService';


export function GenresPreview({ genre }) {


  
    const genresPreviewStyle = {
        backgroundImage: 'url(' + genre.image_url + ')'
    };

    const saveGenreToStorage = (genre) => {
          localStorageService.saveToStorage('genre' , genre);
    }

    return (
        <Link onClick={()=>{saveGenreToStorage(genre)}} to={`/genre/${genre.category_id}`}>
            <div className='genre-card' style={genresPreviewStyle} >
                <div className='genre-black-layer'>
                    <span>{genre.category_name}</span>
                </div>
            </div>
        </Link>
    )
}
