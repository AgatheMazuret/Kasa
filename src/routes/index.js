import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../pages/Home/Home'
import House from '../pages/House/House'
import Error from '../pages/Error/Error'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logement/:id" element={<House />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;