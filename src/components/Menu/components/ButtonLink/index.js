//Primeira coisa que sempre se precisa fazer: importar o react
import React from 'react';

//Todo o componente precisa ser iniciado com maiúsculo
function ButtonLink(props){
    //props => {className: "o que alguém passar", href: "/"}
    console.log(props);
    return(
        <a href={props.href} className={props.className}> 
            Novo vídeo
        </a>
    );
}

export default ButtonLink;