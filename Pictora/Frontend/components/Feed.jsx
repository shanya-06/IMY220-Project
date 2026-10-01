import { useEffect, useState } from "react";
import Post from "./Post";
import "../css/feed.css";

function Feed() {

    const [posts, setPosts] = useState([]);
    const [feedBtn, setFeedBtn] = useState("show local feed");

    useEffect(() => {

        fetch("http://localhost:3000/api/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error(error));

    }, []);

    const toggleFeed = () => {

        if (feedBtn === "show local feed") {
            setFeedBtn("show global feed");
        }
        else {
            setFeedBtn("show local feed");
        }

    };

    return (
        <main>
            <h1>Feed</h1>

            <div id="feed">
                {posts.map((post) => (
                    <Post
                        key={post._id}
                        post={post}
                    />
                ))}
            </div>

            <button onClick={toggleFeed}>
                {feedBtn}
            </button>
        </main>
    );
}

export default Feed;