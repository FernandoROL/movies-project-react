import { Link } from 'react-router-dom';
import './style.css';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function MyList(){

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        
        const myList = localStorage.getItem('@fernandoflix');
        setMovies(JSON.parse(myList) || []);

    }, []);

    function removeMovie(movieId){
        let moviefilter = movies.filter((item) => {
            return (item.id !== movieId);
        });
        const removeLocal = () => {
            setMovies(moviefilter);
            localStorage.setItem("@fernandoflix", JSON.stringify(moviefilter));
            toast.success("Movie removed from list");
        }
        window.confirm("Do you really want to delete this movie from your list?", )? 
        removeLocal()
        :void(0);
        return;
    }
    
    return(
        <div className='my-movies'>
            <h1>
                My List
            </h1>

            {
                movies.length === 0 ? <span>Your list is empty...</span> : void(0)
            }
            
            <ul>
                {
                    movies.map((movie) => {
                        return(
                            <li key={movie.id}>
                                <span>{movie.title}</span>
                                <div>
                                    <Link to={`/movies/${movie.id}`}>Open details</Link>
                                    <button onClick={() => removeMovie(movie.id)}>Remove</button>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default MyList;