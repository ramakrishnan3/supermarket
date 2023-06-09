import axios from 'axios';

const baseURL = `http://localhost:8080`;

export const fetchItems = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/cart/`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch items:', error);
    return [];
  }
};

export const getTotalPrice = async (cart) => {
  try {
    const payload = cart.map((cartItem) => ({
      name: Object.keys(cartItem)[0],
      quantity: cartItem[Object.keys(cartItem)[0]],
    }));
    const response = await axios.post(`${baseURL}/api/cart/total`, payload);
    return response.data.total;
  } catch (error) {
    console.error('Failed to get total price:', error);
    return null;
  }
};
