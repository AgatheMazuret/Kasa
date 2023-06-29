import React, { useState } from "react";
import "../Dropdown/Dropdown.scss";
import logements from "../../data/logements.json";

function DropdownHouse() {
  const [description, setDescription] = useState("");
  const [equipements, setEquipements] = useState("");

  const handleDescriptionClick = () => {
    const firstLogement = logements[0]; 
    setDescription(firstLogement.description);
  };

  const handleEquipementsClick = () => {
    const firstLogement = logements[0]; 
    setEquipements(firstLogement.equipements);
  };

  return (
    <div className="dropdownHouse">
      <div className="dropdownHouse-btn" onClick={handleDescriptionClick}>
        Description
      </div>
      <div className="dropdownHouse-content">{description}</div>

      <div className="dropdownHouse-btn" onClick={handleEquipementsClick}>
        Equipements
      </div>
      <div className="dropdownHouse-content">{equipements}</div>
    </div>
  );
}

export default DropdownHouse;