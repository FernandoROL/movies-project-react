import axios from "axios";

const base_url = 'https://api.themoviedb.org/3/';
export const api_key = process.env.REACT_APP_MOVIE_API;

export const api = axios.create({
    baseURL: base_url,
});