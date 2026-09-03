import Home from "./pages/homePage.jsx";
import Post from "./pages/postPage.jsx";
import Search from "./pages/searchPage.jsx";
import Profile from "./pages/profilePage.jsx";
import Splash from "./pages/splashPage.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={Splash}></Route>
                <Route path="/home" element={Home}></Route>
                <Route path="/profile/:id" element={Profile}></Route>
                <Route path="/post/:id" element={Post}></Route>
                <Route path="/search" element={Search}></Route>
            </Routes>
        </BrowserRouter>
    );
}


export default App;
