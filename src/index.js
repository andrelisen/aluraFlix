import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter , Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

//Desafio = colocar um joguinho na página de erro
function Pagina404() {
  return(
    <div>
      <strong> ERRO 404 <br></br> ESSA PÁGINA NÃO FOI ENCONTRADA</strong>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter> {/* Rotas dos navegadores */}
    <Switch> {/* Suas entradas possíveis/ Ordem das rotas interfere*/}
        <Route path="/" component={Home} exact/> {/* Referencia as páginas do meu site */ }
        <Route path="/cadastro/video" component={CadastroVideo} /> 
        <Route path="/cadastro/categoria" component={CadastroCategoria} /> 
        <Route component={Pagina404} /> {/*Carrega erro 404 */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
