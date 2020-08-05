// Esse arquivo contem o agrupamento das partes
// Que irão ser usadas por +1 página
// tipo um layout "fixo"
import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    ${({ paddingAll }) => css`
        padding: ${paddingAll};
    `} 
`;

function PageDefault({ children, paddingAll }) {
  return (
  /* Todo componente precisa ter algo em volta */
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
