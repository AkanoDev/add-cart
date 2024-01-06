import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useState } from "react";

function Product({ selectedProducts }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
    // Update the cartItems state with the selected product
    setCartItems([...cartItems, selectedProducts]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="product">
      <figure>
        <div className="sidebar-left">
          <img src={selectedProducts.image} alt={selectedProducts.id} />
          <h1>{selectedProducts.productName}</h1>
        </div>

        <div className="sidebar-right">
          <p>{selectedProducts.description}</p>
          <div className="buttons">
            <button className="cart" onClick={addToCart}>
              Add to Cart
            </button>
            <button className="buy">Buy</button>
          </div>
        </div>
      </figure>

      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default Product;
