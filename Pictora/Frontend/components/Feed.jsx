import { useState } from "react";
import Post from "./Post";

function Feed() {
    const posts = [
    {
    id: 1,
    userId: 101,
    username: "photoFan99",
    profilePic: "/assets/users/user1.png",
    title: "Sunset at the Beach",
    description: "Caught this amazing sunset while walking along the shore 🌅",
    imageUrl: "/assets/posts/sunset.jpg",
    hashtags: ["#sunset", "#beach", "#nature"],
    createdAt: "2026-09-01T18:30:00",
    comments: [
        { user: "skyWatcher", text: "Wow, beautiful colors!" },
        { user: "traveler23", text: "Reminds me of my last trip." }
        ]
    },
    {
    id: 2,
    userId: 102,
    username: "urbanExplorer",
    profilePic: "/assets/users/user2.png",
    title: "City Lights",
    description: "Johannesburg skyline at night ",
    imageUrl: "/assets/posts/citylights.jpg",
    hashtags: ["#city", "#lights", "#urban"],
    createdAt: "2026-09-02T21:15:00",
    comments: [
        { user: "nightOwl", text: "Love the vibe!" }
        ]
    },
    {
    id: 3,
    userId: 103,
    username: "foodieQueen",
    profilePic: "/assets/users/user3.png",
    title: "Homemade Pizza",
    description: "Tried a new recipe today ",
    imageUrl: "/assets/posts/pizza.jpg",
    hashtags: ["#food", "#pizza", "#homemade"],
    createdAt: "2026-09-03T12:00:00",
    comments: [
        { user: "chefMaster", text: "Looks delicious!" },
        { user: "hungryGuy", text: "Save me a slice " }
    ]   
    }
];

const [feedBtn, setFeedBtn] = useState("show local feed");



const feed = posts.map((post) => (
                <Post key={post.id} post={post} />
            ))

    const toggleFeed = () =>{
        if (feedBtn === "show local feed") {
            setFeedBtn("show global feed");
            //filter feed by friends
            } else {
            setFeedBtn("show local feed");
            //show all posts
            }
    };

    return (
        <main>
            <h1>Feed</h1>
                <div>
                    {feed}
                </div>
            <button onClick={toggleFeed}>${feedBtn}</button>
        </main>
    );
}

export default Feed;