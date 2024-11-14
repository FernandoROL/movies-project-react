import { useEffect, useState } from "react";
import api from "../../services/api";

function Home(){
    const [movies, setMovie] = useState([]);

    // Parameters for the movies api
    const api_key = process.env.REACT_APP_MOVIE_API;
    const lang = 'en-US';

    useEffect(()=>{

        async function loadMovies() {
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: api_key,
                    language: lang,
                    pages: 1
                }
            });
            
            console.log(response.data.results);

        }

        loadMovies();

    }, []);

    return(
        <div>
            <h1>Welcome to the home page</h1>
        </div>
    )
}

export default Home;