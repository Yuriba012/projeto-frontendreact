import React from "react";
import { Container, Section, Title } from "./style";
import { Filter } from "../Filter/Filter.js";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart.js";
import { Card } from "../Card/Card.js";
import { useState, useEffect } from "react";

export function Main(props) {
  const [minValue, setMinValue] = useState(-Infinity);
  const [maxValue, setMaxValue] = useState(Infinity);
  const [sort, setSort] = useState("");
  const [cartItems, setCartItems] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      setCartItems(cart);
      cartPrice(cart)
    }
    console.log("oi");
    console.log(cart);
  }, []);

  useEffect(() => {
    const cart = JSON.stringify(cartItems);
    localStorage.setItem("cart", cart);
  }, [cartItems]);

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
      <Filter
        minValue={minValue}
        maxValue={maxValue}
        sort={sort}
        setMinValue={setMinValue}
        setMaxValue={setMaxValue}
        setSort={setSort}
      />
      <Section>
        <Title>
          <h3>Produtos</h3>
        </Title>
        {props.products
          .filter((product) =>
            product.name.toLowerCase().includes(props.query.toLowerCase())
          )
          .filter((product) => product.price >= minValue || minValue === "")
          .filter((product) => product.price <= maxValue || maxValue === "")
          .sort((a, b) => {
            switch (sort) {
              case "name":
                return a.name.localeCompare(b.name);
              case "price":
                return a.price - b.price;
              default:
                return "";
            }
          })
          .map((product) => {
            return (
              <Card
                key={product.id}
                product={product}
                addCartItem={addCartItem}
                cartPrice={cartPrice}
              />
            );
          })}
      </Section>
      <ShoppingCart
        cartItems={cartItems}
        removeCartItem={removeCartItem}
        changeCartQuantity={changeCartQuantity}
        cartPrice={cartPrice}
        totalPrice={totalPrice}
      />
    </Container>
  );
}
