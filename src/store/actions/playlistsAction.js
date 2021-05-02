import { playListService } from '../../services/playListService';

const playlistsOptions = [
    {action : 'SET_RECENTLY_PLAYED_PLAYLISTS',endPoint : 'recently_played_playlists?limit=10'},
    {action : 'SET_FEATURED_PLAYLISTS',endPoint : 'featured_playlists?limit=10'},
    {action : 'SET_MOOD_PLAYLISTS',endPoint : 'mood_playlists?limit=10'}
];


export function loadRecentlyPlayed() {
    return async dispatch => {
            const playlists = await playListService.query(playlistsOptions[0].endPoint);
            dispatch({ type:playlistsOptions[0].action , playlists })
        }
}


export function loadFeaturedPlylists() {
    return async dispatch => {
            const playlists = await playListService.query(playlistsOptions[1].endPoint);
            dispatch({ type:playlistsOptions[1].action , playlists })
        }
}


export function loadMoodPlylists() {
    return async dispatch => {
            const playlists = await playListService.query(playlistsOptions[2].endPoint);
            dispatch({ type:playlistsOptions[2].action , playlists })
        }
}


export function savePlaylist(playlist) {
    return dispatch => {
        dispatch({type: 'SET_1_PLAYLIST' ,playlist})
    }
}

export function saveSingleQuickTrack(track) {
    return dispatch => {
        dispatch({type: 'SET_quick_track',track})
    }
}





    // return async dispatch => {
    //     const playlists = await playListService.query();
    //     console.log(playlists);
    //     dispatch({ type: 'SET_PLAYLISTS', playlists })
    // }


// 'SET_RECENTLY_PLAYED_PLAYLISTS'