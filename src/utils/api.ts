import axios from 'axios';

var api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

api.interceptors.response.use((response): any => {
    return {
        response
    }
}, (error) => {
    return new Promise((res,rej)=>{
        rej(error);
    })
});

export default api;
