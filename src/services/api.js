import axios from "axios";

const base_url = 'https://api.themoviedb.org/3/';

const api = axios.create({
    baseURL: base_url,
});

export default api;