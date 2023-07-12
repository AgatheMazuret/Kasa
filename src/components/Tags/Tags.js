import React from "react";
import "./Tags.scss";

function Tags({ logement }) {
  const tag = logement.tags;  // Récupération des tags du logement depuis les propriétés
  const tagMap = tag.map((tag, index) => (
    <h2 key={tag}>{logement.tags[index]}</h2>  // Création d'une liste de balises h2 pour afficher les tags
  ));

  return <div className="tags">{tagMap}</div>;  // Affichage des balises h2 des tags dans une div avec la classe "tags"
}

export default Tags;
