import React from 'react';
import {Container} from './style'

export function Header(props){
    return(
        <Container>
            <h2>MySpaceShirt.com</h2>
            <form>
                <label htmlFor='search'>Buscar</label>
                <input value={props.query} onChange={(e)=>props.setQuery(e.target.value)} type='text' id='search' name='search'></input>
            </form>

        </Container>
    )
}
