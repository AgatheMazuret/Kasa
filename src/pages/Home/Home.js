import Cart from "../../components/Cart/Cart";
import "../Home/Home.scss";
import "../../styles/global.scss";

const Home = () => {
  return (
    <>
    <div className="banner">
      <div className="homePicture">
        <p>Chez vous, partout et ailleurs </p>
      </div>
    </div>
   <Cart />
    </>
  );
};

export default Home;
