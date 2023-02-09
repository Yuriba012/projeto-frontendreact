import React from 'react'
import styled from 'styled-components'

export const Container = styled.main`
    padding: 8px;
    flex-grow: 1;
    display: grid;
    grid-template-columns: 200px 1fr 230px;
    gap: 8px;
    color: white;
    background: #292929;
    align-items: flex-start;
`
export const Section = styled.section`
    border-radius: 30px;
    background: rgb(80,80,80);
    padding-bottom: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    justify-content: center;
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
    grid-column: 1/3;
    >h3{

    }
`

