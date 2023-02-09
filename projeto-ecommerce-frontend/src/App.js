import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'
import {Header} from './components/Header/Header.js';
import {Footer} from './components/Footer/Footer.js';
import {Main} from './components/Main/Main.js';
import wallpaper from './assets/wallpaper.jpg'
import productsList from './productsList.json'
import { useState } from 'react';

const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

function App() {
  const [products] = useState(productsList)
  const [query, setQuery] = useState('')

  return (
    <Container>
      <GlobalStyled/>
      <Header 
        query={query}
        setQuery={setQuery}
      />
      <img  src={wallpaper}></img>
      <Main
        products={products}
        query={query}
      />
      <Footer/>
    </Container>
  );
}

export default App;
