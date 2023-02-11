import React from 'react'
import styled from 'styled-components'

export const Container = styled.footer`
    padding:20px 0;
    height: 200px;
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: rgb(0,204,204);
    background: linear-gradient(90deg, rgba(0,204,204,0.6446953781512605) 0%, rgba(41,41,41,100) 76%);
    @media screen and (max-width: 1000px){
        padding: 20px 20px;
        text-align: center;
    }
`