import React from "react";
import { Container, Paragraph, Button, Titulo, Image, Input, Remove, Text } from "./style";
import trashCan from '../../assets/trash-can-icon.png'

export function CartItem(props) {
  return (
    <Container>
      <Image src={props.item.imgUrl}></Image>
      <Text>
        <Titulo>{props.item.name}</Titulo>
      </Text>
      <Remove>
        <Paragraph>Preço: R${props.item.price.toFixed(2)}</Paragraph>
        <Input
          type="number"
          value={props.item.quantity}
          onChange={(e) => props.changeCartQuantity(props.item, e.target.value)}
        />
        <Button onClick={() => props.removeCartItem(props.item)}>
          <img  src={trashCan}/>
        </Button>
      </Remove>
    </Container>
  );
}
