import './header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link className='logo' to='/'>Fernando Flix</Link>
            <Link className='favorites' to='/favorites'>My Movies</Link>
        </header>
    );
}

export default Header;