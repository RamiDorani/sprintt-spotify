import React from 'react';

export function LikesSongsHeader(props) {

    return (
        <div className="liked-header-container">
            <div className="black-layer">
                <div className="liked-songs-header-info flex-between">
                    <h3>Liked Songs</h3>
                    <h4><span>{props.numOfSongs}</span> Songs</h4>
                </div>
            </div>
        </div>
    )
}
