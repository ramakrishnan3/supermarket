import React, { useState, useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { CartPage } from './components/CartPage';
import { fetchItems, getTotalPrice } from './api/api';

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [grossPrice, setGrossPrice] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [address, setAddress] = useState(null);
  const receiptRef = useRef();

  useEffect(() => {
    fetchItems().then((data) => setItems(data));
  }, []);

  useEffect(() => {
    calculatePrice();
  });

  const addItemToCart = (item) => {
    const productName = Object.keys(item)[0];
    const existingItem = cart.find((cartItem) => Object.keys(cartItem)[0] === productName);
    if (existingItem) {
      existingItem[Object.keys(existingItem)[0]] += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { [productName]: 1 }]);
    }
  };

  const removeItemFromCart = (item) => {
    const productName = Object.keys(item)[0];
    const existingItem = cart.find((cartItem) => Object.keys(cartItem)[0] === productName);
    if (existingItem) {
      existingItem[Object.keys(existingItem)[0]] -= 1;
      if (existingItem[Object.keys(existingItem)[0]] === 0) {
        setCart(cart.filter((cartItem) => Object.keys(cartItem)[0] !== productName));
      } else {
        setCart([...cart]);
      }
    }
  };

  const calculatePrice = async () => {
    const price = await getTotalPrice(cart);
    setTotalPrice(price);
    calculateGrossPrice();
  };

  const calculateGrossPrice = () =>
    setGrossPrice(
      cart.reduce((acc, cartItem) => {
        const productName = Object.keys(cartItem)[0];
        return (
          acc +
          cartItem[productName] *
            items.find((item) => Object.keys(item)[0] === productName)[productName]
        );
      }, 0)
    );

  const handlePrint = useReactToPrint({
    content: () => receiptRef.current,
  });

  return (
    <div className="App">
      <CartPage
        items={items}
        cart={cart}
        grossPrice={grossPrice}
        totalPrice={totalPrice}
        address={address}
        receiptRef={receiptRef}
        addItemToCart={addItemToCart}
        removeItemFromCart={removeItemFromCart}
        handlePrint={handlePrint}
        setAddress={setAddress}
      />
    </div>
  );
}

export default App;
