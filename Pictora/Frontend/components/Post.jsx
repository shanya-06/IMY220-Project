function Post({ post }) {

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


    return (
    <article>
        <h2>{post.title}</h2>
        <p><strong>By:</strong> {post.username}</p>
        <img src={post.imageUrl} alt={post.title}  />
        <p>{post.description}</p>
        <p>
        {post.hashtags.map((tag, index) => (
        <span key={index}>{tag}</span>
        ))}
        </p>
        <div>
        <h4>Comments:</h4>
        {post.comments.map((c, i) => (
        <p key={i}><strong>{c.user}:</strong> {c.text}</p>
        ))}
    </div>
    </article>
);
}

export default Post;
