import React from 'react';

export function GenrePageHeader({ genreName, genreImg,playlistsLength }) {

    const genrePageHeaderStyle = {
        backgroundImage: 'url(' + genreImg + ')'
    };

    return (
        <div className="playlist-header-container" style={genrePageHeaderStyle} >
            <div className="genre-page-header flex-between ">
                <h3>{genreName}</h3>
                <h3><span>{playlistsLength}</span> Playlists</h3>
            </div>
        </div>
    )
}
