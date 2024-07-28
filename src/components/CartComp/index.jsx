import "./index.scss";

function CartComp() {
  const CartItem = ({ title, index, value }) => {
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
  };

  const cartElements = [
    { title: "Product 2", value: 2, key: 0 },
    { title: "Product 5", value: 4, key: 1 },
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
