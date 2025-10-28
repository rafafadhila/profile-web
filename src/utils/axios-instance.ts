import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "http://192.168.18.145:3000/api"
})