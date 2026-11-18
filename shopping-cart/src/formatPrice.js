// Formats a number as "1,99 Eur"
export function formatPrice(value) {
  return value.toFixed(2).replace(".", ",") + " Eur";
}
