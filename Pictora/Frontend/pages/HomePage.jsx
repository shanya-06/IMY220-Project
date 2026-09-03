import Nav from "../components/Nav";
import Feed from "../components/Feed";
import FriendBar from "../components/FriendBar";

const posts = {
    
}

function homepage(){
    return(
        <div>
            <Nav />
            <Feed />
            <FriendBar />
        </div>
    );
}

export default homepage;