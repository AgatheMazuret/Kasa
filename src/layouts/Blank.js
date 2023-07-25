import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";

function Blank() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Blank;
