import React from "react";
import { Aside, Title, TotalPrice } from "./style.js";
import { CartItem } from "../CartItem/CartItem.js";
import { useState } from "react";

export function ShoppingCartAside(props) {

  return (
    <Aside>
      <Title>
        <h3>Carrinho</h3>
      </Title>
      {
      props.cartItems.length === 0?
      <h3 >Nenhum item adicionado</h3>
      :props.cartItems.map((item) => {
        return (
          <CartItem
            key={item.id}
            item={item}
            removeCartItem={props.removeCartItem}
            changeCartQuantity={props.changeCartQuantity}
          />
        );
      })
    }
    <TotalPrice>
      <h3>Total: R$ {props.totalPrice.toFixed(2)}</h3>
    </TotalPrice>
    </Aside>
  );
}
