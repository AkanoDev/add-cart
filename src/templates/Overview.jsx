import Card from "./card";

function Overview({ products, onHandleSelected, selectedProducts }) {
  return (
    <div className="overview">
      <h1>NODE CART</h1>
      <div className="card-container">
        <Card
          products={products}
          onHandleSelected={onHandleSelected}
          selectedProducts={selectedProducts}
        />
      </div>
    </div>
  );
}

export default Overview;
