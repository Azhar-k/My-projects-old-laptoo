import axios from 'axios';

const instance = axios.create(
    {
        baseURL : 'https://bugreports-1a282.firebaseio.com'
    }
);

export default instance;