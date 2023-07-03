import data from "../../data/logements.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Tags from "../../components/Tags/Tags";
import Error from "../Error/Error";
import "../House/House.scss";
import Dropdown from "../../components/Dropdown/Dropdown";
import Carousel from "../../components/Carousel/Carousel";
import Host from "../../components/Host/host";

function House() {
  // Récupération de l'id dans l'url
  const { id } = useParams();

  const [logement, setLogement] = useState({
    tags: [],
    equipments: [],
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
  const logementEquipements = logement.equipments;

  let mapEquipments = logementEquipements.map((e, index) => (
    <p key={e}>{logement.equipments[index]}</p>
  ));

  return (
    <>
      <section>
        <div className="logement">
          <Carousel slides={logement.pictures} />

          <h1>{logement.title}</h1>
          <p>{logement.location}</p>

          <Tags logement={logement} />
<div className="toto">
          <Dropdown title="Equipements" content={mapEquipments} />
          <Dropdown title="Description" content={logement.description} />
          </div>

          <Host host={logement.host} />
        </div>
      </section>
    </>
  );
}

export default House;
