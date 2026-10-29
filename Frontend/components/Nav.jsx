import { Link } from "react-router-dom";
import "../css/nav.css";

function Nav(){

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    return(
        <nav>
            <span id="logoName">
                <span id="logo">- logo here -</span>
                <h2>Pictora</h2>
            </span>
                <Link to="/home">Home</Link>
                <Link to="/search">Search </Link>
                <Link to={`/profile/${currentUser._id}`}>Profile</Link>
                <Link to="/createpost">post</Link>
            
        </nav>
    );
}

export default Nav;