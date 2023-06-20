import data from "../../data/logements.json";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <section>
        {data.map((l) => (
          <Link key={l.id} to={`/logement/${l.id}`}>
            <div> <p>{l.title}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

export default Cart;
