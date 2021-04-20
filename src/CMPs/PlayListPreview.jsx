import React from 'react';


export function PlayListPreview({playlist}) {
    return (
        <div className="PlayListPreview-container flex-col">
            <img src={playlist.image_url} alt="" />
            <div className="flex-col">
                <h4>{playlist.name}</h4>
                <p>{playlist.description}</p>
            </div>
        </div>
    )
}
