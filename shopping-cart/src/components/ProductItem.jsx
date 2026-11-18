import { formatPrice } from "../formatPrice";

function ProductItem({ product, onAdd }) {
  return (
    <li className="product-item">
      <span>
        {product.name} – {formatPrice(product.price)}
      </span>
      <button onClick={() => onAdd(product)}>Pridėti į krepšelį</button>
    </li>
  );
}

export default ProductItem;
