import { httpService } from './httpService';


export const playListService = {
    query,
    getSongs,
    changeLikedStatus
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
    await httpService.post(endpoint)
}

