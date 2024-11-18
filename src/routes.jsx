import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Header from "./components/Header";
import Error from "./pages/Error";
import MyList from "./pages/MyList";

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes, BrowserRouter } from "react-router-dom";

function RouterApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies/:id" element={<Movies />} />
                <Route path="/favorites" element={<MyList />} />

                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouterApp; 