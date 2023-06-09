import { render, screen, fireEvent } from '@testing-library/react';
import { CartPage } from '../../components/CartPage';

describe('CartPage', () => {
  const items = [{ item1: 1 }, { item2: 2 }];
  const cart = [{ item1: 3 }];
  const grossPrice = 10;
  const totalPrice = 8;
  const address = '123 Main St';
  const receiptRef = { current: {} };
  const addItemToCart = jest.fn();
  const removeItemFromCart = jest.fn();
  const handlePrint = jest.fn();
  const setAddress = jest.fn();

  it('should render cart page correctly', () => {
    render(
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
    );
    const cartItem = screen.getByText('item1');
    const addressField = screen.getByLabelText("Customer's Address");
    expect(cartItem).toBeInTheDocument();
    expect(addressField).toBeInTheDocument();
  });

  it('should call addItemToCart when "+" button in cart item is clicked', () => {
    render(
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
    );
    const plusButtons = screen.getAllByText('+');
    const firstPlusButton = plusButtons[0];
  
    fireEvent.click(firstPlusButton);
    expect(addItemToCart).toHaveBeenCalledTimes(1);
    expect(addItemToCart).toHaveBeenCalledWith({ item1: 1 });
  });

  it('should call removeItemFromCart when "-" button in cart item is clicked', () => {
    render(
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
    );
    const minusButtons = screen.getAllByText('-');
    const firstMinusButton = minusButtons[0];
    fireEvent.click(firstMinusButton);
    expect(removeItemFromCart).toHaveBeenCalledTimes(1);
    expect(removeItemFromCart).toHaveBeenCalledWith({ item1: 1 });
  });

  it('should call handlePrint when "Print Receipt" button is clicked with a non-empty address', () => {
    render(
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
    );
    const printButton = screen.getByText('Print Receipt');
    fireEvent.click(printButton);
    expect(handlePrint).toHaveBeenCalledTimes(1);
  });

  it('should display an alert when "Print Receipt" button is clicked with an empty address', () => {
    window.alert = jest.fn();
    render(
      <CartPage
        items={items}
        cart={cart}
        grossPrice={grossPrice}
        totalPrice={totalPrice}
        address=""
        receiptRef={receiptRef}
        addItemToCart={addItemToCart}
        removeItemFromCart={removeItemFromCart}
        handlePrint={handlePrint}
        setAddress={setAddress}
      />
    );
    const printButton = screen.getByText('Print Receipt');
    fireEvent.click(printButton);
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith('Please enter address');
  });
});
