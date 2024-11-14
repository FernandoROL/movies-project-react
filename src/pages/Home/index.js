import { useEffect, useState } from "react";
import { api, api_key } from "../../services/api";
import { Link } from "react-router-dom";
import './home.css';

function Home(){
    const [movies, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    // Parameters for the movies api
    const lang = 'en';

    useEffect(()=>{

        async function loadMovies() {
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: api_key,
                    language: lang,
                    pages: 1
                }
            });
            
            // console.log(response.data.results.slice(0,10));
            setMovie(response.data.results.slice(0,20));
            setLoading(false);

        }

        loadMovies();

    }, []);

    if(loading) {
        return(
            <div className="loading">
                <h2>Loading movies...</h2>
            </div>
        );
    }

    return(
        <div className="container">
            <div className="movies-list">
                {
                    movies.map((movie)=>{
                        return(
                            <article key={movie.id}>
                                <strong>{movie.title}</strong>
                                <img src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}></img>
                                <Link to={`/movies/${movie.id}`}>Access</Link>
                            </article>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;