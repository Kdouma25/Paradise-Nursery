import React, { useState } from 'react';
import MainApp from './MainApp';
import ProductListingPage from './ProductListingPage';
import Header from './Header';
import data from './Data';
import Cart from './Cart';

// Main App
export default function App() {
  const [showOnbording, setShowOnbording] = useState(true);
  const [productData, setProductData] = useState(data);
  const [cart, setCart] = useState(() => {
    let cartString = localStorage.getItem('CART');
    let cartJson = JSON.parse(cartString);
    return cartJson ?? [];
  });
  const [showCart, setShowCart] = useState(false);

  function getStartedClicked() {
    setShowOnbording(false);
  }

  function addProductToCart(productId) {
    setCart(prevCart => {
      var items = [];
      if (prevCart.length !== 0) {
        const existingItem = prevCart.find(
          item => item[productId] !== undefined
        );

        if (existingItem) {
          items = prevCart.map(item =>
            item[productId] !== undefined
              ? { [productId]: item[productId] + 1 }
              : item
          );
        } else {
          items = [...prevCart, { [productId]: 1 }];
        }
      } else {
        items = [{ [productId]: 1 }];
      }
      localStorage.setItem('CART', JSON.stringify(items));
      return items;
    });
  }

  function onOpenCart() {
    setShowCart(true);
  }

  function onBackToShop() {
    setShowCart(false);
  }

  function onMinusFromCart(id) {
    setCart(prevCart => {
      let newCart = prevCart.map(item => {
        let key = Object.keys(item)[0];
        if (key == id) {
          let value = Object.values(item)[0];
          if (value > 0) {
            return { [key]: value - 1 };
          }
        } else {
          return item;
        }
      }).filter(
        item => {
          let value = Object.values(item)[0];
          return value > 0
        }
      );

      localStorage.setItem('CART', JSON.stringify(newCart));
      return newCart;
    });
  }

  function onRemoveFromCart(id) {
    console.log("recahed")
    setCart(prevCart => {
      let newCart = prevCart.filter(item => {
        let key = Object.keys(item)[0];
        return key != id
      });

      console.log(newCart)
      localStorage.setItem('CART', JSON.stringify(newCart));
      return newCart;
    });
  }



  return (
    <>
      {showOnbording && <MainApp onGetStarted={getStartedClicked} />}
      {!showOnbording &&  <Header productCount={cart.length} onOpenCart={onOpenCart} />}
      {!showOnbording && !showCart && (
        <ProductListingPage
          productData={productData}
          cart={cart}
          onAddProductToCart={addProductToCart}
        />
      )}
      {showCart &&  <Cart
        cart={cart}
        productData={productData}
        addProductToCart={addProductToCart}
        onBackToShop={onBackToShop}
        onMinusFromCart={onMinusFromCart}
        onRemoveFromCart={onRemoveFromCart}
      />}
    </>
  );
}
