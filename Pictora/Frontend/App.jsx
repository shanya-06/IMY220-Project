import Home from "./pages/HomePage.jsx";
import Post from "./pages/PostPage.jsx";
import Search from "./pages/SearchPage.jsx";
import Profile from "./pages/ProfilePage.jsx";
import Splash from "./pages/SplashPage.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Splash />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/profile/:id" element={<Profile />}></Route>
                <Route path="/post/:id" element={<Post />}></Route>
                <Route path="/search" element={<Search />}></Route>
            </Routes>
        </BrowserRouter>
    );
}


export default App;
