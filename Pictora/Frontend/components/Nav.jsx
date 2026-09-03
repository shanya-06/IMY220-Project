import { Link } from "react-router-dom";
import "../css/nav.css";

function Nav(){
    return(
        <nav>
            <span id="logoName">
                <span id="logo">- logo here -</span>
                <h2>Pictora</h2>
            </span>
                <Link to="/home">Home</Link>
                <Link to="/search">Search </Link>
                <Link to="/profile/101">Profile</Link>
                <Link to="/post/2">Post</Link>
            
        </nav>
    );
}

export default Nav;