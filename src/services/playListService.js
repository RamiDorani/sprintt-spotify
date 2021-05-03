import { httpService } from './httpService';


export const playListService = {
    query,
    getSongs,
    changeLikedStatus,
    postRecentlyPlayed,
    getLikedSongs,
    getcatagories,
    getAllGenrePlaylists
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
    const endpoint = `notify_played/${playlistId}/${songId}`;
    await httpService.post(endpoint);
}

async function getLikedSongs() {
    const endpoint = `liked_tracks`;
    const data = await httpService.get(endpoint);
    return data;
}

async function getcatagories() {
    const endpoint = `categories`;
    const data = await httpService.get(endpoint);
    return data
}


async function getAllGenrePlaylists (id) {
    const endpoint = `category_playlists/${id}`
    const data = await httpService.get(endpoint)
    return data.playlists;
}

