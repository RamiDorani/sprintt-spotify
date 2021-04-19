import React from 'react';
import { NavBar } from './CMPs/NavBar';
import { Switch, Route } from 'react-router-dom';

export function App() {
  return (
    <div className="app-wrapper">
      <NavBar />
      <Switch>
      </Switch>
    </div>
  )
}
