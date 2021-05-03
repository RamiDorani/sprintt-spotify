import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Browse } from './pages/Browse';
import { LikedSongs } from './pages/LikedSongs';
import { NavBar } from './CMPs/NavBar';
import { Playlist } from './pages/Playlist';
import { GenrePage } from './pages/GenrePage';

export function App() {
  return (
    <div className="app-wrapper">
      <div className="flex-between">
        <NavBar />
        <Switch>
          <Route component={GenrePage} exact path='/genre/:id' />
          <Route component={Playlist} exact path='/playlist/:id' />
          <Route component={LikedSongs} path='/liked-songs' />
          <Route component={Browse} path='/browse' />
          <Route component={HomePage} exact path='/' />
        </Switch>
      </div>
    </div>
  )
}
