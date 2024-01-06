import { useState } from "react";

function Cart({ cartItems, removeFromCart }) {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  function addCounter() {
    setCounter((counter) => counter + step);
  }

  function minCounter() {
    setCounter((counter) => counter - step);
  }

  return (
    <div className="container-cart">
      <h1>cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.id} />
            <h2>{item.productName}</h2>
            <button onClick={() => removeFromCart(index)}>Remove</button>

            <button onClick={addCounter}>add</button>
            <span>{counter < 0 ? 0 : counter}</span>
            <button onClick={minCounter}>minus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
