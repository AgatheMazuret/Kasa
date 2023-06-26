import React from "react";
import logo from "../../assets/LOGO.svg";
import "./Header.scss";
import { Link } from "react-router-dom";

// Constante pour le logo kasa
const LogoNav = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <div className="nav">
        <Link to="/" className="accueil">
          Accueil
        </Link>
        <Link to="/a-propos" className="aPropos">
          A Propos
        </Link>
      </div>
    </div>
  );
};

export default LogoNav;
