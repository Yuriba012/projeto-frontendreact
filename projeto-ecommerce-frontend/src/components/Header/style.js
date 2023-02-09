import React from "react";
import styled from 'styled-components'

export const Container = styled.header`
    color: #00cccc;
    height: 50px;
    padding 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(67,67,80,1) 51%, rgba(0,0,0,1) 100%);
    >form{
        display: flex;
        width: 230px;
        justify-content: space-between;
    }
`