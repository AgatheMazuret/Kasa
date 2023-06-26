import Cart from "../../components/Cart/Cart";
import image from "../../assets/photo_accueil.png";

const Home = () => {
  return (
    <>
    <div>
      <div>
        <p style={{ backgroundImage:`url(${image})`}}>Chez vous ... </p>
      </div>
    </div>
      <Cart />
    </>
  );
};

export default Home;
