import axios from 'axios';


const BASE_URL = 'https://api.sprintt.co/spotify/';

const options = {
    headers: {
        'user-access-token': '32e4f4a3-666b-4419-8945-5a060bb777fb'
    }
}

export const httpService = {
    get,
    post
}



async function get(endPoint) {
    try {
        const res = await axios.get(BASE_URL + endPoint, options);
        return res.data
    } catch (err) {
        console.log(`Had Issues getting data`);
        console.dir(err);
        if (err.response && err.response.status === 401) {
            window.location.assign('/');
        }
        throw err;
    }
}

async function post(endpoint) {
    try {
        return await axios.post(BASE_URL + endpoint,{},options);
    } catch(err) {
        console.log(`Had Issues posting data`);
        console.dir(err);
        if (err.response && err.response.status === 401) {
            window.location.assign('/');
        }
        throw err;
    }
}
