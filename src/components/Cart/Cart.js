import data from "../../data/logements.json";  // Importation des données de logement depuis un fichier JSON
import { Link } from "react-router-dom";  // Importation de Link depuis react-router-dom
import "../Cart/cart.scss";  // Importation des styles du composant Cart

function Cart() {
  return (
    <>
      <section>
        <div className="backgroundCart">
          {data.map((l) => (
            <Link key={l.id} to={`/logement/${l.id}`}>   {/* Création d'un lien vers la page de logement en utilisant l'id du logement*/}
              <div className="cart">
                <p style={{ backgroundImage: `url(${l.cover})` }}>{l.title}</p>   {/* Affichage du titre du logement avec une image de couverture*/}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Cart;



