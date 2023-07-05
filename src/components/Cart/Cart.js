import data from "../../data/logements.json";
import { Link } from "react-router-dom";
import "../Cart/cart.scss";

function Cart() {
  return (
    <>
      <section>
        <div className="backgroundCart">
          {data.map((l) => (
            <Link key={l.id} to={`/logement/${l.id}`}>
              <div className="cart">
                <p style={{ backgroundImage: `url(${l.cover})` }}>{l.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Cart;

<div></div>;
