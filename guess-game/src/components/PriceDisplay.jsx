function PriceDisplay({ price, startPrice }) {
  return (
    <div className="price-display">
      <h1>Vertė: {price} €</h1>
      <h1>Pokytis: {price - startPrice} €</h1>
    </div>
  );
}

export default PriceDisplay;
