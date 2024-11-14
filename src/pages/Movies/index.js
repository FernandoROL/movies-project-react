import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { api, api_key } from "../../services/api";
import './style.css';
import { toast } from "react-toastify";

function Movies(){

    const {id} = useParams();

    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{

        async function loadMovie(movie) {   

            await api.get(`/movie/${id}`, {
                params:{
                    api_key: api_key,
                    language: 'en'
                }
            })
            .then((response) => {
                setMovie(response.data);
            })
            .catch(()=>{
                toast.error("Movie not found!")
                navigate("/", {replace: true});
                return;
            });        
        }

        loadMovie();

        return () => {
            setLoading(false);
        }

    }, [navigate, id]);

    function saveMovie(){
        const myList = localStorage.getItem("@fernandoflix");

        let savedMovies = JSON.parse(myList) || [];

        const hasMovie = savedMovies.some( (saved) => saved.id === movie.id);

        if(hasMovie){
            toast.warn("Movie is already on your list.")
            return;
        }

        savedMovies.push(movie);
        localStorage.setItem("@fernandoflix" , JSON.stringify(savedMovies));
        toast.success('Saved to movie list');

    }

    if(loading){
        return(
            <div className="loading">
                <h2>
                    Loading details...
                </h2>
            </div>
        )
    }

    return(
        <div className="info">
            <h1>{movie.title}</h1>
            <img src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title}></img>

            <h3>Overview</h3>
            <span>{movie.overview}</span>
            <span>Release date: {movie.release_date}</span>

            <strong>Rating: {Number(movie.vote_average).toFixed(1)} / 10</strong>

            <div className="buttons">
                <button>
                    <a onClick={saveMovie}>Save</a>
                </button>
                <button>
                    <a target="blank" href={`https://youtube.com/results?search_query=${movie.title} Trailer`}>Trailer</a>
                </button>
            </div>
        </div>
    )
}

export default Movies;