import React from "react";
import { Container, Section, Title } from "./style";
import { Filter } from "../Filter/Filter.js";
import { ShoppingCartAside } from "../ShoppingCartAside/ShoppingCartAside.js";
import { Card } from "../Card/Card.js";
import { useState } from "react";

export function Main(props) {
  const [minValue, setMinValue] = useState(-Infinity);
  const [maxValue, setMaxValue] = useState(Infinity);
  const [sort, setSort] = useState("");

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
                addCartItem={props.addCartItem}
                cartPrice={props.cartPrice}
              />
            );
          })}
      </Section>
      <ShoppingCartAside
        cartItems={props.cartItems}
        removeCartItem={props.removeCartItem}
        changeCartQuantity={props.changeCartQuantity}
        cartPrice={props.cartPrice}
        totalPrice={props.totalPrice}
      />
    </Container>
  );
}
