import { Link } from "react-router-dom";
import "../css/nav.css";

function Nav(){
    return(
        <nav>
            <span id="logoName">
                <span id="logo">- logo here -</span>
                <h2>Pictora</h2>
            </span>
                <Link to="/">Home</Link>
                <Link to="/search">Search </Link>
                <Link to="/profile/:id">Profile</Link>
            
        </nav>
    );
}

export default Nav;