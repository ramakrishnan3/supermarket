const cartService = require('../src/cart/services');
const controller = require('../src/cart/controller');

jest.mock('../src/cart/services');

describe('Controller Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getItems', () => {
    it('should return the cart items', async () => {
      const mockProducts = ['apple', 'banana'];
      cartService.getItems.mockResolvedValue(mockProducts);

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await controller.getItems({}, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockProducts);
    });

    it('should handle errors and return status 500', async () => {
      cartService.getItems.mockRejectedValue(new Error('Failed to get items from cart'));

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await controller.getItems({}, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Failed to get items from cart' });
    });
  });

  describe('getTotalPrice', () => {
    it('should return the total price of the cart', async () => {
      const mockCartDetails = [
        { name: 'apple', quantity: 5 },
        { name: 'banana', quantity: 1 },
      ];
      const mockTotalPrice = 350;
      const req = { body: mockCartDetails };

      cartService.getTotalPrice.mockResolvedValue(mockTotalPrice);

      const res = {
        json: jest.fn(),
      };

      await controller.getTotalPrice(req, res);

      expect(res.json).toHaveBeenCalledWith({ total: mockTotalPrice });
    });

    it('should handle errors and return status 500', async () => {
      const mockCartDetails = [
        { name: 'apple', quantity: 5 },
        { name: 'banana', quantity: 1 },
      ];
      const req = { body: mockCartDetails };

      cartService.getTotalPrice.mockRejectedValue(new Error('Failed to get total price'));

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await controller.getTotalPrice(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Failed to get total price' });
    });
  });
});

describe('Controller Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getItems', () => {
    it('should return the cart items', async () => {
      const mockProducts = ['apple', 'banana'];
      cartService.getItems.mockResolvedValue(mockProducts);

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await controller.getItems({}, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockProducts);
    });

    it('should handle errors and return status 500', async () => {
      cartService.getItems.mockRejectedValue(new Error('Failed to get items from cart'));

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await controller.getItems({}, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Failed to get items from cart' });
    });
  });

  describe('getTotalPrice', () => {
    it('should return the total price of the cart', async () => {
      const mockCartDetails = [
        { name: 'apple', quantity: 10 },
        { name: 'banana', quantity: 5 },
      ];
      const mockTotalPrice = 570;
      const req = { body: mockCartDetails };

      cartService.getTotalPrice.mockResolvedValue(mockTotalPrice);

      const res = {
        json: jest.fn(),
      };

      await controller.getTotalPrice(req, res);

      expect(res.json).toHaveBeenCalledWith({ total: mockTotalPrice });
    });

    it('should handle errors and return status 500', async () => {
      const mockCartDetails = [
        { name: 'apple', quantity: 5 },
        { name: 'banana', quantity: 1 },
      ];
      const req = { body: mockCartDetails };

      cartService.getTotalPrice.mockRejectedValue(new Error('Failed to get total price'));

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await controller.getTotalPrice(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Failed to get total price' });
    });
  });
});
