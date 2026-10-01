import { useState } from "react";

function CreatePost() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        await fetch("http://localhost:3000/api/posts", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                _id: `post${Date.now()}`,

                userId: "user111",

                title: title,

                description: description,

                hashtags: [],

                hidden: false

            })

        });

        alert("Post created");

    };

    return (
        <div>
            <Nav />

        <form onSubmit={handleSubmit}>

            <p>Create Post</p>

            <label htmlFor="title">
                Enter post title
            </label>

            <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="description">
                Post description
            </label>

            <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button type="submit">
                Create
            </button>

        </form>
        </div>

    );

}

export default CreatePost;