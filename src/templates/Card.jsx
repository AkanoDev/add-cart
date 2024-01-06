import { Link } from "react-router-dom";

function Card({ products, onHandleSelected }) {
  return (
    <div className="card-wrapper">
      <div className="card">
        {products.map((product) => (
          <Link
            to="/product"
            onClick={() => onHandleSelected(product)}
            className="link"
            key={product.id}
          >
            <li>
              <img src={product.image} alt={product.id} />
              <h2>{product.productName}</h2>
            </li>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Card;
