import React from 'react';
import { Link } from 'react-router-dom';

export function NavBar() {
    return (
        <div className="nav-bar-container flex-col">
            <img className="logo" src={require('../assets/logo.png').default} alt="" />
            <ul className="nav-bar-list">
                <li className="nav-bar-item flex">
                    <Link>
                        <img src={require('../assets/home_icon.png').default} alt="" />
                        <span>Home</span>
                    </Link>
                </li>
                <li className="nav-bar-item flex">
                    <Link>
                        <img src={require('../assets/browse_icon.png').default} alt="" />
                        <span>Browse</span>
                    </Link>
                </li>
                <li className="nav-bar-item flex">
                    <Link>
                        <img src={require('../assets/liked_songs_icon.png').default} alt="" />
                        <span>Liked songs</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
