import React from "react";
import {Container, Button, Paragraph, Image, Titulo} from './style.js'

export function Card(props){
    return(
        <Container>
            <Image src={props.product.imgUrl}></Image>
            <Titulo>{props.product.name}</Titulo>
            <Paragraph>Preço: R${props.product.price.toFixed(2)}</Paragraph>
            <Button onClick={()=>props.addCartItem(props.product)}>Adicionar ao carrinho</Button>
        </Container>
    )
}