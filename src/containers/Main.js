import React from 'react';
import Styled from 'styled-components';
import Home from './Home';

const MainContainer = Styled.div`
    background-color: #0a0a0a;
    height: 100vh;
    width: 100vw;
`;

const Main = () => {
    return(
    <MainContainer>
        <Home />
    </MainContainer>
    )
}

export default Main;