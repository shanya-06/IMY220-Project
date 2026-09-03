import Nav from "../components/Nav";

function searchpage(){
    return(
        <div>
            <Nav />
            <form>
                <input type="text" placeholder="Search..."></input>
            </form>
            <div id="searchResults"></div>
        </div>
    );
}

export default searchpage;