import data from "../../data/logements.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Tags from "../../components/Tags/Tags";
import Error from "../Error/Error";
import "../House/House.scss";

function House() {
  // Récupération de l'id dans l'url
  const { id } = useParams();

  const [logement, setLogement] = useState({
    tags: [],
    equipements: [],
    pictures: [],
    rating: "",
    host: { name: "", picture: "" },
  });

  useEffect(() => {
    data.map((l) => {
      if (l.id === id) {
        setLogement(l);
      }
      return null;
    });
  }, [id]);

  if (logement.title === undefined) {
    return <Error />;
  }

  return (
    <>
      <section>
        <div className="logement">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <Tags logement={logement} />
        </div>
      </section>
    </>
  );
}
/*
<Carousel slides={logement.pictures} />
*/
export default House;
