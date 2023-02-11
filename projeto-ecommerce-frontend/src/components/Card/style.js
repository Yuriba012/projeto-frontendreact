import React from "react";
import styled from 'styled-components'

export const Container = styled.article`
    margin-left: 70px;
    width: 300px;
    height: 500px;
    background-color: rgb(30,30,30);
    border-radius: 30px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid white;
    box-shadow: black 4px 4px 4px;
    :hover{
        transform: scale(1.6);
    }
    @media screen and (max-width: 1000px){
        margin: 0;
        :hover{
            transform: scale(1);
        }
    }
`
export const Button = styled.button`
    border-radius: 10px;
    padding: 2px;
    :hover{
        background-color: #00FF55;
    }
    width:150px;
    :active{
        background-color: #00D4FF
    }
`
export const Paragraph = styled.p`
    color: #00cccc;
`
export const Titulo = styled.h3`
    color: #00cccc;
`
export const Image = styled.img`
    width: 100%;
    border-radius: 30px;
`