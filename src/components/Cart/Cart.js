import data from "../../data/logements.json";
import { Link } from "react-router-dom";
import "../Cart/cart.scss"

function Cart() {
  return (
    <>
      <section>
      <div className="backgroundCart">
        {data.map((l) => (
          <Link key={l.id} to={`/logement/${l.id}`}>
            <div className="cart">
            <img src={l.cover} alt={l.title} />
            <h2>{l.title}</h2>
            </div>
          </Link>
        ))}
      </div>
      </section>
    </>
  );
}

export default Cart;
