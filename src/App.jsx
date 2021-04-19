import React from 'react';
import { NavBar } from './CMPs/NavBar';
import { Switch } from 'react-router-dom';

export function App() {
  return (
    <div className="app-wrapper">
      <NavBar />
      <Switch>
      </Switch>
    </div>
  )
}
