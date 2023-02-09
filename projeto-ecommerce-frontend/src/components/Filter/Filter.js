import React from 'react'
import {Nav} from './style.js'
import { useState } from 'react'

export function Filter(props){
    return(
        <Nav>
            <form>
                <label htmlFor='minValue'>Valor Mínimo</label>
                <input type='number' value={props.minValue} onChange={(e)=>props.setMinValue(e.target.value)}/>
                <label htmlFor='maxValue'>Valor Máximo</label>
                <input type='number' value={props.maxValue} onChange={(e)=>props.setMaxValue(e.target.value)}/>
                <label htmlFor='ordem'>Ordenar</label>
                <select value={props.sort} onChange={(e)=>props.setSort(e.target.value)} name='ordem'>
                    <option value=''>-</option>
                    <option value="name">Nome</option>
                    <option value="price">Preço</option>
                </select>
            </form>
        </Nav>
    )
}
