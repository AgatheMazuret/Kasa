import React from "react";
import "../apropos/apropos.scss";
import image from "../../assets/photo_a_propos.png";

const apropos = () => {
  return (
    <div className="aProposPicture">
      <img src={image} alt="Paysage montagneux" />
    </div>
  );
};

export default apropos;
