import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Header from "./components/Header";
import Error from "./pages/Error";
import MyList from "./pages/MyList";

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