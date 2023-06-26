import Cart from "../../components/Cart/Cart";
import image from "../../assets/photo_accueil.png";
import "../../styles/global.scss";

const Home = () => {
  return (
    <>
    <div>
      <div className="homePicture">
        <p style={{ backgroundImage:`url(${image})`}}>Chez vous, partout et ailleurs </p>
      </div>
    </div>
      <Cart />
    </>
  );
};

export default Home;
