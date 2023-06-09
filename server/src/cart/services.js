const db = require('./db.json');

async function getItems(item, quantity) {
  const products = Object.keys(db.discountData);
  const productPricing = products.map((product) => ({ [product]: db.discountData[product].individualPrice }));

  return productPricing;
}

async function getTotalPrice(cartDetails) {
  let totalPrice = 0;

  for (const cartItem of cartDetails) {
    const { name, quantity } = cartItem;
    const { individualPrice, groupPrice, groupCount } = db.discountData[name];
    const groupDiscounts = Math.floor(quantity / groupCount);
    const individualItems = quantity % groupCount;

    totalPrice += groupDiscounts * groupPrice + individualItems * individualPrice;
  }

  return totalPrice;
}

module.exports = {
  getItems,
  getTotalPrice,
};
