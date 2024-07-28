import "./index.scss";
import stockImage from "../../assets/randomstock.png";
// import { useState } from "react";

function ProductsComp() {
  // const [productValue, setProductValue] = useState(0);

  // const handelSetProductValue = (value, index) => {
  //   console.log(productsElements.at(index).value);
  //   setProductValue(productsElements.at(index).value + 1);
  //   console.log(productsElements.at(index).value);
  // };

  const ProductItem = ({ title, value }) => {
    if (value == 0) {
      return (
        <>
          <div className="products-grid-item">
            <img src={stockImage} className="product-image" />
            {title}
            <div className="add-products-container">
              <button className="products-button">+</button>ADD
              <button className="products-button">-</button>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="products-grid-item">
            <img src={stockImage} className="product-image" />
            {title}
            <div className="add-products-container">
              <button className="products-button">+</button>
              {value}
              <button className="products-button">-</button>
            </div>
          </div>
        </>
      );
    }
  };

  const productsElements = [
    { title: "Product 1", value: 0, key: 0 },
    { title: "Product 2", value: 2, key: 1 },
    { title: "Product 3", value: 0, key: 2 },
    { title: "Product 4", value: 0, key: 3 },
    { title: "Product 5", value: 4, key: 4 },
    { title: "Product 6", value: 0, key: 5 },
  ];

  return (
    <div className="products-comp-container">
      <div className="products-border">
        <div className="products-header">PRODUCTS</div>
        <div className="products-grid">
          {productsElements.map((item, index) => (
            <ProductItem
              key={item.key}
              title={item.title}
              value={item.value}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsComp;
