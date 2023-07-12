import "./Rating.scss";
import starEmpty from "../../assets/star-empty.png";
import starFull from "../../assets/star-full.png";

function Rating({ stars }) {
  const ratingScore = [1, 2, 3, 4, 5];

  console.log(stars);
  return (
    <>
      {ratingScore.map((ratingElem) => 
        stars >= ratingElem ? (
          <img src={starFull} key={ratingElem.toString()} className="stars" alt="Etoile rempli"/>
        ) : (
          <img src={starEmpty} key={ratingElem.toString()} className="stars" alt="Etoile vide"/>
        )
      )}
    </>
  );
}

export default Rating;