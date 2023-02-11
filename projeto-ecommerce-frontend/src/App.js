import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Header } from "./components/Header/Header.js";
import { Footer } from "./components/Footer/Footer.js";
import { Main } from "./components/Main/Main.js";
import wallpaper from "./assets/wallpaper.jpg";
import productsList from "./productsList.json";
import { useState } from "react";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart.js";
import { useEffect } from "react";

const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  const [products] = useState(productsList);
  const [query, setQuery] = useState("");
  const [cartItems, setCartItems] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [page, setPage] = useState(0);

  const changePage = (newPage) => {
    setPage(newPage);
  };

  const renderPage = () =>{
    if(page === 0){
      return
    }
  }

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const currentPage = JSON.parse(localStorage.getItem("page"));
    if (cart) {
      setCartItems(cart);
      cartPrice(cart);
    }
    setPage(currentPage);
    console.log("oi");
    console.log(cart);
  }, []);

  useEffect(() => {
    const cart = JSON.stringify(cartItems);
    localStorage.setItem("cart", cart);
  }, [cartItems]);

  useEffect(() => {
    const currentPage = JSON.stringify(page);
    localStorage.setItem("page", currentPage);
  }, [page]);

  const addCartItem = (item) => {
    let include = false;
    for (let currentItem of cartItems) {
      if (currentItem.id === item.id) include = true;
    }
    const newCart = [...cartItems];
    if (!include) {
      item.quantity = 1;
      newCart.push(item);
    } else {
      item.quantity++;
    }
    setCartItems(newCart);
    cartPrice(newCart);
  };

  const removeCartItem = (item) => {
    const newCart = cartItems.filter(
      (currentItem) => currentItem.id !== item.id
    );
    setCartItems(newCart);
    cartPrice(newCart);
  };

  const changeCartQuantity = (item, value) => {
    const newCart = [...cartItems];
    newCart.forEach((currentItem) => {
      if (currentItem.id === item.id) {
        currentItem.quantity = value;
      }
    });
    setCartItems(newCart);
    if (item.quantity <= 0) {
      removeCartItem(item);
    }
    cartPrice(newCart);
  };

  const cartPrice = (cart) => {
    let sum = 0;
    for (let item of cart) {
      sum += item.price * item.quantity;
    }
    setTotalPrice(sum);
  };

  return (
    <Container>
      <GlobalStyled />
      <Header
        query={query}
        setQuery={setQuery}
        page={page}
        changePage={changePage}
      />
      {
        <>
          <img src={wallpaper}></img>
          <Main
            products={products}
            query={query}
            addCartItem={addCartItem}
            cartPrice={cartPrice}
            cartItems={cartItems}
            removeCartItem={removeCartItem}
            changeCartQuantity={changeCartQuantity}
            totalPrice={totalPrice}
          />
        </>}
      <Footer />
    </Container>
  );
}

export default App;
