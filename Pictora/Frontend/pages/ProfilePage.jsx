import Nav from "../components/Nav";
import Profile from "../components/Profile";
import Friends from "../components/Friends";
import Notifications from "../components/Notifications";
import CreatePost from "../components/CreatePost";

function profilepage(){
    return(
        <div>
            <Nav />
            <h1>Profile page</h1>
            
            {/*<Profile />
             <Friends />
            <Notifications />
            <CreatePost /> */}
        </div>
    );
}

export default profilepage;