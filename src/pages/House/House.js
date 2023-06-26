import data from "../../data/logements.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Tags from '../../components/Tags/Tags';
import Error from '../Error/Error'

function House() {

// Récupération de l'id dans l'url 
const { id } = useParams();

const [logement, setLogement] = useState({
    tags: [],
    equipements: [],
    picture: [],
    rating: '',
    host: { name: '', picture: ''}
});

useEffect(() => {
    data.map((l) => {
        if(l.id === id){
            setLogement(l)
        }
    })
}, [id])

if(logement.title === undefined){
    return <Error />
}

console.log(logement)

  return (
    <>
      <section>
<div className="logement">
        <h1>{logement.title}</h1>
        <Tags logement={logement} />
      </div></section>
    </>
  );
}

export default House;
