import React from "react";
import LogoFooter from "../../assets/LOGOlogo_kasa_footer.png";
import "../Footer/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logoFooter">
        <img src={LogoFooter} alt="Logo Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
