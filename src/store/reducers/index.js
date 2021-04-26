import { combineReducers } from 'redux';
import { playlistsReducer } from './playlistsReducer';


const rootReducer = combineReducers({
  playlistsReducer,
  });
  
  export default rootReducer;