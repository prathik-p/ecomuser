import CartComp from "../../components/CartComp";
import NavBar from "../../components/NavBar";
import ProductsComp from "../../components/ProductsComp";
import { useState } from "react";
import stockImage from "../../assets/randomstock.png";
import "./index.scss";

function MainPage() {
  const [localStorageValue1, setLocalStorageValue1] = useState(0);
  const [localStorageValue2, setLocalStorageValue2] = useState(0);
  const [localStorageValue3, setLocalStorageValue3] = useState(0);
  const [localStorageValue4, setLocalStorageValue4] = useState(0);
  const [localStorageValue5, setLocalStorageValue5] = useState(0);
  const [localStorageValue6, setLocalStorageValue6] = useState(0);

  localStorage.setItem("Product 1", localStorageValue1);
  localStorage.setItem("Product 2", localStorageValue2);
  localStorage.setItem("Product 3", localStorageValue3);
  localStorage.setItem("Product 4", localStorageValue4);
  localStorage.setItem("Product 5", localStorageValue5);
  localStorage.setItem("Product 6", localStorageValue6);

  const handelLocalStorageValue = (title, value) => {
    if (title == "Product 1") {
      setLocalStorageValue1(localStorageValue1 + 1);
    } else if (title == "Product 2") {
      setLocalStorageValue2(value + 1);
    } else if (title == "Product 3") {
      setLocalStorageValue3(value + 1);
    } else if (title == "Product 4") {
      setLocalStorageValue4(value + 1);
    } else if (title == "Product 5") {
      setLocalStorageValue5(value + 1);
    } else if (title == "Product 6") {
      setLocalStorageValue6(value + 1);
    }
  };
  return (
    <div className="main-page-container">
      <NavBar />
      <div className="divider-1"></div>
      <div className="banner-container">
        <div className="stockimg-container">
          <img className="main-stockimg" src={stockImage} />
        </div>
        <div className="motivashon-text">BUILD YOUR DREAM TODAY</div>
        <div className="stockimg-container">
          <img className="main-stockimg" src={stockImage} />
        </div>
      </div>
      <div className="divider-1"></div>
      <div className="main-page-body-container">
        <ProductsComp
          handelLocalStorageValue={handelLocalStorageValue}
          localStorageValue1={localStorageValue1}
          localStorageValue2={localStorageValue2}
          localStorageValue3={localStorageValue3}
          localStorageValue4={localStorageValue4}
          localStorageValue5={localStorageValue5}
          localStorageValue6={localStorageValue6}
        />
        <div className="divider-2"></div>
        <CartComp />
      </div>
    </div>
  );
}

export default MainPage;
