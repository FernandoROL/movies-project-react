import axios from "axios";

const base_url = 'https://api.themoviedb.org/3/';
export const api_key = "44e86bbb9dbfcca949b19d5ddaa045f3";

export const api = axios.create({
    baseURL: base_url,
});