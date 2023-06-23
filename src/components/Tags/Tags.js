import "./Tags.scss";

function Tags({ logement }) {
  // Je créer une constante avec le tableau des tags et uniquement cette valeur
  const tag = logement.tags;
  const tagMap = tag.map((tag, index) => (
    <p key={tag}>{logement.tags[index]}</p>
  ));

  return (
    <>
      <p>
      <span></span>
      </p>

      <span></span>

      <p>{tagMap}</p>
    </>
  );
}

export default Tags;
