import React from "react";
import "./Tags.scss";

function Tags({ logement }) {
  // Je créer une constante avec le tableau des tags et uniquement cette valeur
  const tag = logement.tags;
  const tagMap = tag.map((tag, index) => (
    <h2 key={tag}>{logement.tags[index]}</h2>
  ));

  return <div className="tags">{tagMap}</div>;
}

export default Tags;
