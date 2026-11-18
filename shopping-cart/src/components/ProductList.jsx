import ProductItem from "./ProductItem";

function ProductList({ products, onAdd }) {
  return (
    <section>
      <h2>Prekės</h2>
      <ul className="product-list">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} onAdd={onAdd} />
        ))}
      </ul>
    </section>
  );
}

export default ProductList;
