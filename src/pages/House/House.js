import data from "../../data/logements.json";  // Importation des données de logement depuis un fichier JSON
import { useParams } from "react-router-dom";  // Importation de useParams pour récupérer l'id de l'URL
import { useState, useEffect } from "react";  // Importation de useState et useEffect pour gérer l'état du composant
import Tags from "../../components/Tags/Tags";  // Importation du composant Tags
import Error from "../Error/Error";  // Importation du composant d'erreur
import "../House/House.scss";  // Importation des styles du composant House
import Dropdown from "../../components/Dropdown/Dropdown";  // Importation du composant Dropdown
import Carousel from "../../components/Carousel/Carousel";  // Importation du composant Carousel
import Host from "../../components/Host/Host";  // Importation du composant Host
import Rating from "../../components/Rating/Rating";  // Importation du composant Rating

function House() {
  const { id } = useParams();  // Récupération de l'id dans l'URL à l'aide de useParams

  const [logement, setLogement] = useState({
    tags: [],
    equipments: [],
    pictures: [],
    rating: "",
    host: { name: "", picture: "" },
  });  // Déclaration d'un état pour stocker les informations du logement

  useEffect(() => {
    data.map((l) => {
      if (l.id === id) {
        setLogement(l);  // Mise à jour de l'état logement avec les données correspondant à l'id de l'URL
      }
      return null;
    });
  }, [id]);  // Utilisation de useEffect pour effectuer une action lorsque l'id change

  if (logement.title === undefined) {
    return <Error />;  // Affichage du composant d'erreur si le titre du logement est indéfini
  }
  const logementEquipements = logement.equipments;

  let mapEquipments = logementEquipements.map((e, index) => (
    <p key={e}>{logement.equipments[index]}</p>
  ));  // Création d'un tableau de paragraphes pour afficher les équipements du logement

  return (
    <>
      <section>
        <div className="logement">
          <Carousel slides={logement.pictures} />  {/* Affichage du composant Carousel avec les images du logement*/} 

          <div className="upBlock">
            <div className="host">
              <Host host={logement.host} />  {/* Affichage du composant Host avec les informations de l'hôte*/} 
            </div>

            <div className="rating">
              <Rating stars={logement.rating} />  {/* Affichage du composant Rating avec la note du logement*/} 
            </div>

            <div className="titleLoc">
              <h1>{logement.title}</h1>  {/* Affichage du titre du logement*/} 
              <p>{logement.location}</p>  {/* Affichage de la localisation du logement*/} 
            </div>
          </div>

          <Tags logement={logement} />  {/* Affichage du composant Tags avec les tags du logement*/} 

          <div className="allDropdown">
            <Dropdown title="Equipements" content={mapEquipments} />  {/* Affichage du composant Dropdown avec les équipements du logement*/} 
            <Dropdown title="Description" content={logement.description} />  {/* Affichage du composant Dropdown avec la description du logement*/} 
          </div>
        </div>
      </section>
    </>
  );
}

export default House;
