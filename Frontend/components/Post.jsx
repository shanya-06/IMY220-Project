function Post({ post }) {

    return (
        <article>

            <h2>{post.title}</h2>

            {post.imageSrc}

            <p>{post.description}</p>

            <div>
                {post.hashtags?.map((tag, index) => (
                    <span key={index}>
                        {tag}{" "}
                    </span>
                ))}
            </div>

        </article>
    );

}

export default Post;