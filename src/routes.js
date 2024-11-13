import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Header from "./components/Header";

function RouterApp() {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies/:id" element={<Movies />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouterApp; 