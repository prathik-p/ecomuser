import "./index.scss";

function CartComp() {
  const CartItem = ({ title, index, value }) => {
    if (value != 0) {
      return (
        <>
          <div className="cart-item">
            <div className="sno-div">{index + 1}</div>
            <div className="cart-divider"></div>
            <div className="title-div">{title}</div>
            <div className="cart-divider"></div>
            <div className="value-div">{value}</div>
          </div>
        </>
      );
    }
  };

  const cartElements = [
    { title: "Product 1", value: localStorage.getItem("Product 1"), key: 0 },
    { title: "Product 2", value: localStorage.getItem("Product 2"), key: 1 },
    { title: "Product 3", value: localStorage.getItem("Product 3"), key: 2 },
    { title: "Product 4", value: localStorage.getItem("Product 4"), key: 3 },
    { title: "Product 5", value: localStorage.getItem("Product 5"), key: 4 },
    { title: "Product 6", value: localStorage.getItem("Product 6"), key: 5 },
  ];

  return (
    <div className="cart-comp-container">
      <div className="cart-border">
        <div className="cart-header">CART</div>
        <div className="cart-index">
          <div className="sno-div">SNO</div>
          <div className="cart-divider"></div>
          <div className="title-div">PRODUCT</div>
          <div className="cart-divider"></div>
          <div className="value-div">VALUE</div>
        </div>
        <div className="cart-products">
          {cartElements.map((item, index) => (
            <CartItem
              key={item.key}
              title={item.title}
              index={index}
              value={item.value}
            />
          ))}
        </div>
        <button className="cart-checkout-button">CHECKOUT</button>
      </div>
    </div>
  );
}

export default CartComp;
