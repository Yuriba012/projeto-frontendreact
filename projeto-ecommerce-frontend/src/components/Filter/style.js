import React from "react"
import styled from 'styled-components'

export const Nav = styled.nav`
    padding: 15px;
    border-radius: 30px;
    background: rgb(80,80,80);
    @media screen and (max-width: 1000px){
        padding: 15px 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`