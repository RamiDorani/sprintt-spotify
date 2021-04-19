import React from 'react';
import { NavLink } from 'react-router-dom';

export function NavBar() {
    return (
        <div className="nav-bar-container flex-col">
            <img className="logo" src={require('../assets/logo.png').default} alt="" />
            <ul className="nav-bar-list">
                <NavLink exact to="/"  className="nav-bar-item flex" activeClassName="selected"> 
                    <li>
                        <img src={require('../assets/home_icon.png').default} alt="" />
                        <span>Home</span>
                    </li>
                </NavLink>
                    <NavLink exact to="/browse" className="nav-bar-item flex" activeClassName="selected">
                <li>
                        <img src={require('../assets/browse_icon.png').default} alt="" />
                        <span>Browse</span>
                </li>
                    </NavLink>
                    <NavLink exact to="/liked-songs" className="nav-bar-item flex" activeClassName="selected">
                <li>
                        <img src={require('../assets/liked_songs_icon.png').default} alt="" />
                        <span>Liked songs</span>
                </li>
                    </NavLink>
            </ul>
        </div>
    )
}
