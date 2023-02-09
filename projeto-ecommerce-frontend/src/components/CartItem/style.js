import React from "react";
import styled from 'styled-components'

export const Container = styled.article`
    width: 100%;
    height: 160px;
    background-color: rgb(30,30,30);
    border-radius: 30px;
    padding: 4px;
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    grid-template-rows: 2fr 1fr;
    gap: 1px;
    align-items: center;
`
export const Button = styled.button`
    border-radius: 10px;
    width: 30px;
    >img{
        height: 20px;
    }
    :hover{
        background-color: #FF6666;
    }
    :active{
        blackground-color: #FF0000;
    }
`
export const Paragraph = styled.p`
    color: #00cccc;
`
export const Titulo = styled.h3`
    color: #00cccc;
`
export const Image = styled.img`
    width: 80px;
    height:80px;
    border-radius: 30px;
`
export const Input = styled.input`
    width: 50px;
    border-radius: 30px;
    text-align:center;
`

export const Remove = styled.div`
    grid-row:2;
    grid-column:1/4;
    display:flex;
    justify-content:space-between;
`
export const Text = styled.div`
    grid-row:1;
    grid-column:2/4;
`