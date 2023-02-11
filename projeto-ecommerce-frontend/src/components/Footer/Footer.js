import React from "react";
import {Container} from './style.js'
import instagram from '../../assets/instagram.png'
import linkedin from '../..//assets/linkedin.png'

export function Footer(){
    return(
        <Container>
            <h4>Desenvolvido por Yuri Moralles - Full Stack Developer</h4>
            <span>yurimoralles@hotmail.com</span>
            <div>
                <a href="https://www.instagram.com/ymoralles/" target={'blank'}>
                    <img width='50px' src={instagram}/>
                </a>
                <a href="https://www.linkedin.com/in/yuri-moralles-ab752291/" target={'blank'}>
                    <img width='50px' src={linkedin}/>
                </a>
            </div>
            <span>Copyright - Todos os direitos reservados</span>
        </Container>
    )
}