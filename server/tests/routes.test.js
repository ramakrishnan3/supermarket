const request = require('supertest');
const app = require('../index');
const cartService = require('../src/cart/services');
const cartController = require('../src/cart/services');

describe('GET /api/cart', () => {
  it('should return an array of cart items', async () => {
    const response = await request(app).get('/api/cart');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should handle errors and return status 500', async () => {
    // Mock the cartService.getItems() function to throw an error
    cartService.getItems = jest.fn().mockRejectedValueOnce(new Error('Failed to get items from cart'));

    const response = await request(app).get('/api/cart');

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ error: 'Failed to get items from cart' });
  });
});

describe('POST /api/cart/total', () => {
  it('should return the total price of the cart', async () => {
    const cartDetails = [{ name: 'apple', quantity: 5 }, { name: 'banana', quantity: 1 }];
    const expectedTotalPrice = 260; // Calculate the expected total price based on the provided input

    const response = await request(app).post('/api/cart/total').send(cartDetails);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ total: expectedTotalPrice });
  });

  it('should handle errors and return status 500', async () => {
    // Mock the cartService.getTotalPrice() function to throw an error
    cartService.getTotalPrice = jest.fn().mockRejectedValueOnce(new Error('Failed to get total price'));

    const response = await request(app).post('/api/cart/total').send([]);

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ error: 'Failed to get total price' });
  });
});

describe('Routes Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('GET /api/cart should call getItems controller function', async () => {
    const mockProducts = ['apple', 'banana'];
    cartController.getItems.mockResolvedValue(mockProducts);

    const response = await request(app).get('/api/cart');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(cartController.getItems).toHaveBeenCalled();
  });

  it('POST /api/cart/total should call getTotalPrice controller function', async () => {
    const mockCartDetails = [
      { name: 'apple', quantity: 3 },
      { name: 'banana', quantity: 3 },
    ];
    const mockTotalPrice = 240;
    cartController.getTotalPrice.mockResolvedValue(mockTotalPrice);

    const response = await request(app).post('/api/cart/total').send(mockCartDetails);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ total: mockTotalPrice });
    expect(cartController.getTotalPrice).toHaveBeenCalled();
  });
});