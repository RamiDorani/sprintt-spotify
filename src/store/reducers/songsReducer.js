const initialState = {
    songs: [],
  }


  export function songsReducer(state = initialState, action) {
    switch (action.type) {
  
      case 'SAVE_SONGS':
        return {
          ...state,
          songs: action.songs
        }
        default:
        return state
    }
  }