import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { PlayListPreview } from '../CMPs/PlayListPreview';

export function PlaylistCarousel(props) {
    const [itemsForShow, setItemsForShow] = useState(5);
    const [shownItems, setShownItems] = useState(5);

 

    const increaseShownItems = () => {
        setShownItems(shownItems+5)
    }

    const reduceShownItems = () => {
        setShownItems(shownItems-5)
    }

    return (

        <Carousel className="carousel " itemsToShow={itemsForShow} itemsToScroll={5} pagination={false}
            renderArrow={({ type, onClick }) =>
                <div className='arrows-container' onClick={onClick}>
                    {type === 'PREV' ? <i onClick={reduceShownItems} className={shownItems<10 ? "fas fa-chevron-left prev-arrow disabled" : "fas fa-chevron-left prev-arrow"}></i> : <i onClick={increaseShownItems} className={(shownItems !== 5 || props.playlists.playlists.length===0) ? "fas fa-chevron-right next-arrow disabled" : "fas fa-chevron-right next-arrow"}></i>}
                </div>} >
            {props.playlists.playlists.map(playlist => <PlayListPreview key={playlist.playlist_id} playlist={playlist} />)}
        </Carousel>
    )
}
