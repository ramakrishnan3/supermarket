const db = require('../src/cart/db.json');
const service = require('../src/cart/services');

describe('Services Tests', () => {
  describe('getItems', () => {
    it('should return the items with individual prices', async () => {
      const expectedProducts = [
        { apple: db.discountData.apple.individualPrice },
        { banana: db.discountData.banana.individualPrice },
      ];

      const products = await service.getItems();

      expect(products).toEqual(expectedProducts);
    });
  });

  describe('getTotalPrice', () => {
    it('should return the total price of the cart', async () => {
      const mockCartDetails = [
        { name: 'apple', quantity: 1 },
        { name: 'banana', quantity: 1 },
      ];

      const expectedTotalPrice = 80; // Calculate the expected total price based on the provided input

      const totalPrice = await service.getTotalPrice(mockCartDetails);

      expect(totalPrice).toEqual(expectedTotalPrice);
    });
  });
});

describe('Services Tests', () => {
  describe('getItems', () => {
    it('should return the items with individual prices', async () => {
      const expectedProducts = [
        { apple: db.discountData.apple.individualPrice },
        { banana: db.discountData.banana.individualPrice },
      ];

      const products = await service.getItems();

      expect(products).toEqual(expectedProducts);
    });
  });

  describe('getTotalPrice', () => {
    it('should return the total price of the cart', async () => {
      const mockCartDetails = [
        { name: 'apple', quantity: 6 },
        { name: 'banana', quantity: 4 },
      ];

      const expectedTotalPrice = 360; // Calculate the expected total price based on the provided input

      const totalPrice = await service.getTotalPrice(mockCartDetails);

      expect(totalPrice).toEqual(expectedTotalPrice);
    });
  });
});
