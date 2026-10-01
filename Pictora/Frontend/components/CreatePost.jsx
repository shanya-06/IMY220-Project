function CreatePost(){
    return(
        <form>
            <p>create post</p>
            <label htmlFor="title">Enter post title</label>
            <input type="text" name="title" id="title" placeholder="title"/>

            <label htmlFor="details">Post descriptions</label>
            <input type="text" name="details" id="details"/>
        </form>
    )
}

export default CreatePost;