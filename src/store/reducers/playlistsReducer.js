const initialState = {
    recentlyPlayedPlaylist: [],
    featuredPlaylists: [],
    moodPlaylists: [],
    singlePlaylist:{},
    quickSingleTrack:{}
  }


  export function playlistsReducer(state = initialState, action) {
    switch (action.type) {
  
      case 'SET_RECENTLY_PLAYED_PLAYLISTS':
        return {
          ...state,
          recentlyPlayedPlaylist: action.playlists
        }

        case 'SET_FEATURED_PLAYLISTS':
        return {
          ...state,
          featuredPlaylists: action.playlists
        }

        case 'SET_MOOD_PLAYLISTS':
        return {
          ...state,
          moodPlaylists: action.playlists
        }


        case 'SET_1_PLAYLIST':
          return {
            ...state,
            singlePlaylist: action.playlist
          }

          case 'SET_quick_track':
          return {
            ...state,
            quickSingleTrack: action.track
          }

        default:
        return state
    }
  }