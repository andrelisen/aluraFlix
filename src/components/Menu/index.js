//Primeira coisa que sempre se precisa fazer: importar o react
import React from 'react';
import Logo from '../../assets/img/LogoAlura.png';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

//Todo o componente precisa ser iniciado com maiúsculo
function Menu(){
    return(
        <nav className="Menu"> 
            <a href="/"> 
                <img className="Logo" src={Logo} alt="Logo AluraFlix"/> 
            </a>
        
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>

        </nav>
    );
}

export default Menu;