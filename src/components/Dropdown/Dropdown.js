import React, { useState } from "react";
import "../Dropdown/Dropdown.scss";


function Dropdown({ title, content }) {
  const [active, setActive] = useState(false);

  const handleToogle = () => {
    setActive(!active);
  };

  return (
    <div className={`dropdown ${active && "active"}`} onClick={handleToogle}>
      <div className="dropdownBlock">
        <div className="title">{title} </div>
        <div><i className="fa-solid fa-chevron-down"></i></div>
      </div>
        <div className="text">{content}</div>
      </div>
    
  );
}

export default Dropdown;
