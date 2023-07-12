import React, { useState } from "react";
import "../Dropdown/Dropdown.scss";

function Dropdown({ title, content }) {
  const [active, setActive] = useState(false);  // Déclaration d'un état pour gérer l'état actif du dropdown

  const handleToggle = () => {
    setActive(!active);  // Inversion de l'état actif lors du clic sur le dropdown
  };

  return (
    <div className={`dropdown ${active && "active"}`} onClick={handleToggle}>
      <div className="dropdownBlock">
        <div className="title">{title} </div>  
        <div><i className="fa-solid fa-chevron-down"></i></div>  
      </div>
      <div className="text">{content}</div>  {/* Contenu du dropdown */}
    </div>
  );
}

export default Dropdown;
