import { Link } from "react-router-dom";

function Product({ selectedProducts }) {
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
            <button className="cart">Add to Cart</button>
            <button className="buy">Buy</button>
          </div>
        </div>
      </figure>
    </div>
  );
}

export default Product;
