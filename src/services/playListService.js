import { httpService } from './httpService';


export const playListService = {
    query,
    getSongs,
    changeLikedStatus,
    postRecentlyPlayed,
    getLikedSongs
}


async function query(endpoint) {
    const data = await httpService.get(endpoint);
    return data;
}


async function getSongs(endpoint) {
    const data = await httpService.get(endpoint);
    return data;
}


async function changeLikedStatus(trackObj) {
    const endpoint = `liked_tracks/${trackObj.track_id}?status=${trackObj.is_liked? 'false' : 'true'}`;
    await httpService.post(endpoint);
}

async function postRecentlyPlayed(playlistId,songId) {
    //console.log(playlistId,songId);
    const endpoint = `notify_played/${playlistId}/${songId}`;
    await httpService.post(endpoint);
}

async function getLikedSongs() {
    const endpoint = `liked_tracks`;
    const data = await httpService.get(endpoint);
    return data;
}

