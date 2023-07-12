import "./Rating.scss";  // Importation des styles du composant Rating
import starEmpty from "../../assets/star-empty.png";  // Importation de l'image d'étoile vide
import starFull from "../../assets/star-full.png";  // Importation de l'image d'étoile remplie

function Rating({ stars }) {
  const ratingScore = [1, 2, 3, 4, 5];  // Tableau contenant les valeurs de notation possibles

  return (
    <>
      {ratingScore.map((ratingElem) => 
        stars >= ratingElem ? (
          <img src={starFull} key={ratingElem.toString()} className="stars" alt="Etoile remplie"/>  // Affichage de l'étoile remplie si la note est supérieure ou égale à ratingElem
        ) : (
          <img src={starEmpty} key={ratingElem.toString()} className="stars" alt="Etoile vide"/>  // Affichage de l'étoile vide si la note est inférieure à ratingElem
        )
      )}
    </>
  );
}

export default Rating;
