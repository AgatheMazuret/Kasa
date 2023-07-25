import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import House from "../pages/House/House";
import Error from "../pages/Error/Error";
import Blank from "../layouts/Blank";
import Default from "../layouts/Default";
import Apropos from "../pages/apropos/apropos";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Blank />}>
          <Route path="*" element={<Error />} />
        </Route>
        <Route element={<Default />}>
          <Route path="/" element={<Home />} />
          <Route path="/logement/:id" element={<House />} />
          <Route path="/apropos" element={<Apropos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
