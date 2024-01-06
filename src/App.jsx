import { useState } from "react";
import Overview from "./templates/Overview";
import Product from "./templates/Product";
import { productsdata } from "./data/data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./templates/Cart";

function App() {
  const [products, setProducts] = useState(productsdata);
  const [selectedProducts, setSelectedProduct] = useState(null);

  function handleSelectedProduct(product) {
    setSelectedProduct(product);
  }
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Overview
                products={products}
                onHandleSelected={handleSelectedProduct}
                selectedProducts={selectedProducts}
              />
            }
          />
          <Route
            path="/product"
            element={<Product selectedProducts={selectedProducts} />}
          />
          <Route
            path="/cart"
            element={<Cart selectedProducts={selectedProducts} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
