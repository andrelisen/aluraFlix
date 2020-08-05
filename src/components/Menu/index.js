//Primeira coisa que sempre se precisa fazer: importar o react
import React from 'react';
import Logo from '../../assets/img/LogoAlura.png';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

//Para poder usar SPA 
import { Link } from 'react-router-dom';

//Todo o componente precisa ser iniciado com maiúsculo
function Menu(){
    return(
        <nav className="Menu"> 
            <Link to="/"> 
                <img className="Logo" src={Logo} alt="Logo AluraFlix"/> 
            </Link>
        
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>

        </nav>
    );
}

export default Menu;