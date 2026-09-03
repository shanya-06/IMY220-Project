import Nav from "../components/Nav";
import Profile from "../components/Profile";
import Friends from "../components/Friends";
import Notifications from "../components/Notifications";

function profilepage(){
    return(
        <div>
            <Nav />
            <Profile />
            <Friends />
            <Notifications />
        </div>
    );
}

export default profilepage;