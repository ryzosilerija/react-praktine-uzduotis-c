import { formatPrice } from "../formatPrice";

function Cart({ cart, onRemove }) {
  // Total is calculated from cart data on every render
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section>
      <h2>Krepšelis</h2>

      {cart.length === 0 ? (
        <p>Krepšelis tuščias.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>{formatPrice(item.price)}</span>
              <span>x {item.quantity}</span>
              <span>{formatPrice(item.price * item.quantity)}</span>
              <button onClick={() => onRemove(item.id)}>
                Pašalinti iš krepšelio
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="total">Iš viso: {formatPrice(total)}</p>
    </section>
  );
}

export default Cart;
