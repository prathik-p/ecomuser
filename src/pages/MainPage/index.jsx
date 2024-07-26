import CartComp from "../../components/CartComp";
import NavBar from "../../components/NavBar";
import ProductsComp from "../../components/ProductsComp";
import "./index.scss";

function MainPage() {
  return (
    <div className="main-page-container">
      <NavBar />
      <div className="divider-1"></div>
      <div className="main-page-body-container">
        <ProductsComp />
        <CartComp />
      </div>
    </div>
  );
}

export default MainPage;
