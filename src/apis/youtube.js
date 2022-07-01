import axios from 'axios';

const KEY = 'AIzaSyA-G7QBd-zsPBnBBwXN2wQcUxu4DaqeaFA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    
    }
});