import { useState } from "react";
import ProductList from "./components/ProductList";

const initialProducts = [
  { id: 1, name: "Obuolys", price: 0.5 },
  { id: 2, name: "Duona", price: 1.99 },
  { id: 3, name: "Pienas", price: 1.29 },
];

function App() {
  const [products] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, { ...product, quantity: 1 }]);
  }

  return (
    <main className="container">
      <h1>Parduotuvė</h1>
      <ProductList products={products} onAdd={addToCart} />
    </main>
  );
}

export default App;
