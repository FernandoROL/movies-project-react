import './error.css'
import { Link } from 'react-router-dom';

function Error(){
    return(
        <div className="error">
            <h1>404</h1>
            <h2>Page Not Found.</h2>
            <Link to={'/'}>Go back to movie list</Link>
        </div>
    )
}

export default Error;