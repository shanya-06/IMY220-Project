import Nav from "../components/Nav.jsx"

function SearchPage(){
    return(
        <div><Nav />
        <h1>search page</h1></div>
    )
}

export default SearchPage;


// import { useState } from "react";
// import Post from "../components/Post"; // reuse your Post component

// function SearchPage() {

// //     const posts = [
// //     {
// //     id: 1,
// //     userId: 101,
// //     username: "photoFan99",
// //     profilePic: "/assets/users/user1.png",
// //     title: "Sunset at the Beach",
// //     description: "Caught this amazing sunset while walking along the shore 🌅",
// //     imageUrl: "/assets/posts/sunset.jpg",
// //     hashtags: ["#sunset", "#beach", "#nature"],
// //     comments: [
// //         { user: "skyWatcher", text: "Wow, beautiful colors!" },
// //         { user: "traveler23", text: "Reminds me of my last trip." }
// //         ]
// //     },
// //     {
// //     id: 2,
// //     userId: 102,
// //     username: "urbanExplorer",
// //     profilePic: "/assets/users/user2.png",
// //     title: "City Lights",
// //     description: "Johannesburg skyline at night ",
// //     imageUrl: "/assets/posts/citylights.jpg",
// //     hashtags: ["#city", "#lights", "#urban"],
// //     createdAt: "2026-09-02T21:15:00",
// //     comments: [
// //         { user: "nightOwl", text: "Love the vibe!" }
// //         ]
// //     },
// //     {
// //     id: 3,
// //     userId: 103,
// //     username: "foodieQueen",
// //     profilePic: "/assets/users/user3.png",
// //     title: "Homemade Pizza",
// //     description: "Tried a new recipe today ",
// //     imageUrl: "/assets/posts/pizza.jpg",
// //     hashtags: ["#food", "#pizza", "#homemade"],
// //     createdAt: "2026-09-03T12:00:00",
// //     comments: [
// //         { user: "chefMaster", text: "Looks delicious!" },
// //         { user: "hungryGuy", text: "Save me a slice " }
// //     ]   
// //     }
// // ];

    
// //     const [query, setQuery] = useState("");
// //     const [results, setResults] = useState([]);

// //     const handleSearch = () => {
// //     // basic filter: check if title or description contains the query
// //     const filtered = posts.filter(
// //         (post) =>
// //         post.title.toLowerCase().includes(query.toLowerCase()) ||
// //         post.description.toLowerCase().includes(query.toLowerCase())
// //     );
// //     setResults(filtered);
// //     };


//     return(
//         <main>
//             <Nav />
//             <h1> Search </h1>
//             {/* <form>
//                 <h3>Find out more...</h3>
//                 <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search posts..."/>
//                 <button onClick={handleSearch}>Search</button>
//             </form>
//             <div id="searchResults">
//                 {results.length === 0 && query && <p>No results found for "{query}".</p>}

//         {results.map((post) => (
//         <Post key={post.id} post={post} /> */}
//         {/* ))} */}
//             {/* </div> */}
//         </main>
//     );
// }

// export default SearchPage;