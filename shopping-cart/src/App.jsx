import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const initialProducts = [
  { id: 1, name: "Obuolys", price: 0.5 },
  { id: 2, name: "Duona", price: 1.99 },
  { id: 3, name: "Pienas", price: 1.29 },
];

function App() {
  const [products] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // Product already in cart: increase quantity instead of adding a new row
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  return (
    <main className="container">
      <h1>Parduotuvė</h1>
      <ProductList products={products} onAdd={addToCart} />
      <Cart cart={cart} />
    </main>
  );
}

export default App;
