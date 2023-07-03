import React, { useState } from "react";
import "../Dropdown/Dropdown.scss";
import logements from "../../data/logements.json";

function Dropdown({ title, content }) {
  const [active, setActive] = useState(false);

  const handleToogle = () => {
    setActive(!active);
  };

  return (
    <div className={`dropdown ${active && "active"}`} onClick={handleToogle}>
      <div className="containerDropdown">
      <div className="dropdown-btn" >
        {title} <i class="fa-solid fa-chevron-up"></i>
      </div>
      <div className="dropdown-content">{content}</div>
      </div>
    </div>
  );

}

export default Dropdown;
