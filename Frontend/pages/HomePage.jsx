import Nav from "../components/Nav";
import Feed from "../components/Feed";
import FriendBar from "../components/FriendBar";
import "../css/feed.css";
function HomePage(){

    return(
       <div className="
            min-h-screen
            bg-beige
            text-dark
            font-body
            ">
            <Nav />
            <Feed />
            <FriendBar userId="user222"/>
        </div>
    );

}

export default HomePage;