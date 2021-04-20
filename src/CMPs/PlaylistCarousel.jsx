import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import { PlayListPreview } from '../CMPs/PlayListPreview';

export function PlaylistCarousel({ playlists }) {
    const [itemsForShow, setItemsForShow] = useState(0);
    const [jumpStep, setJumpStemp] = useState(5);
    const [shownItems, setShownItems] = useState(5);

    useEffect(() => {
        console.log(playlists);
        if (playlists.length >= 6) {
            setItemsForShow(5);
            setShownItems(5)
            playlists.length >= 10 ? setJumpStemp(5) : setJumpStemp(playlists.length - itemsForShow);
            setShownItems(itemsForShow);
        }
        else {
            setItemsForShow(playlists.length)
            setJumpStemp(0);
            setShownItems(itemsForShow);
        }
    }, []);


    const increaseShownItems = () => {
        console.log('before clicking', shownItems);
        if (playlists.length >= 10) setShownItems(shownItems + 5)

        console.log('after clicking', shownItems);
    }

    const reduceShownItems = () => {
        console.log('before clicking', shownItems);
        if (playlists.length >= 10) setShownItems(shownItems - 5)
        console.log('after clicking', shownItems);
    }

    return (

        <Carousel className="carousel " itemsToShow={5} itemsToScroll={5} pagination={false}
            renderArrow={({ type, onClick }) =>
                <div className='arrows-container' onClick={onClick}>
                    {type === 'PREV' ? <i onClick={reduceShownItems} className={shownItems === 0 ? "fas fa-chevron-left prev-arrow disabled" : "fas fa-chevron-left prev-arrow"}></i> : <i onClick={increaseShownItems} className={shownItems === 5 ? "fas fa-chevron-right next-arrow disabled" : "fas fa-chevron-right next-arrow"}></i>}
                </div>} >
            {playlists.map(playlist => <PlayListPreview key={playlist.playlist_id} playlist={playlist} />)}
        </Carousel>
    )
}
