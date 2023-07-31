import React, { useState } from "react";
import "../Dropdown/Dropdown.scss";

function Dropdown({ title, content }) {
  const [active, setActive] = useState(true);  // Changer la valeur initiale à true pour replier par défaut

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className={`dropdown ${active && "active"}`} onClick={handleToggle}>
      <div className="dropdownBlock">
        <div className="title">{title}</div>
        <div><i className="fa-solid fa-chevron-down"></i></div>
      </div>
      <div className="text">{content}</div>
    </div>
  );
}

export default Dropdown;
