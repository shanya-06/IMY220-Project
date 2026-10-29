import { Link } from "react-router-dom";
import "../css/nav.css";
function Nav(){

const savedUser = localStorage.getItem("currentUser");

const currentUser =
    savedUser ? JSON.parse(savedUser) : null;

    return(
<nav
className=" flex justify-between items-center bg-[#2C2C2C] text-[#F5F0E6] px-8 py-4 shadow-lg "
>           
    
   <span className="flex items-center gap-4"
>
                <span id="logo"><img src="../images/@Pictora.png" className=" h-[70px] rounded-[10px] "/></span>
                <h2 className="text-[#e46c8c]">Pictora</h2>
            </span >
                <Link to="/home">Home</Link>
                <Link to="/search">Search </Link>
                <Link to={`/profile/${currentUser._id}`}>Profile</Link>
                <Link to="/createpost">post</Link>
            
        </nav>
    );
}

export default Nav;