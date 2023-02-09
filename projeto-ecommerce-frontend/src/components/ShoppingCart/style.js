import React from "react"
import styled from 'styled-components'

export const Aside = styled.aside`
    border-radius: 30px;
    background: rgb(80,80,80);
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    justify-content: space-between;
    min-height: 250px;
`

export const Title = styled.div`
    color: #00cccc;
    background-color: rgb(30,30,30);
    width:100%;
    height:40px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    >h3{

    }
`

export const TotalPrice = styled.div`
    color: #00cccc;
    background-color: rgb(30,30,30);
    width:100%;
    height:40px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    >h3{

    }
`