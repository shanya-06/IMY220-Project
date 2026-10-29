function Post({ post }) {

    return (
        <article className="
bg-white
p-40
pb-10
shadow-xl
rotate-[-1deg]
hover:rotate-[1deg]
transition-all
duration-300
">

            <h2>{post.title}</h2>

            <img
                src={post.imageSrc}
                className="
                w-full
                h-64
                object-cover
                mb-4
                p-8
                "
            />

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