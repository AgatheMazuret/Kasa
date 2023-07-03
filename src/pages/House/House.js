import data from "../../data/logements.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Tags from "../../components/Tags/Tags";
import Error from "../Error/Error";
import "../House/House.scss";
import Dropdown from "../../components/Dropdown/Dropdown";
import Carousel from "../../components/Carousel/Carousel";

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
          <Carousel slides={logement.pictures} />
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <Tags logement={logement} />
          <Dropdown title="Equipements" content={logement.equipments} />
          <Dropdown title="Description" content={logement.description} />
        </div>
      </section>
    </>
  );
}


export default House;
