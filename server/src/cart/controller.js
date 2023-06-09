const cartService = require('./services');

async function getItems(req, res) {
  try {
    const products = await cartService.getItems();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get items from cart' });
  }
}

async function getTotalPrice(req, res) {
  try {
    const cartDetails = req.body;
    const totalPrice = await cartService.getTotalPrice(cartDetails);
    res.json({ total: totalPrice });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get total price' });
  }
}

module.exports = {
  getItems,
  getTotalPrice,
};
