import { combineReducers } from 'redux';
import { songsReducer } from './songsReducer';


const rootReducer = combineReducers({
  songsReducer,
  });
  
  export default rootReducer;