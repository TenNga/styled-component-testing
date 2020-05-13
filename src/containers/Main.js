import React from 'react';
import Styled from 'styled-components';
import Home from './Home';
import Navbar from './Navbar';

const MainContainer = Styled.div`
    background-color: #0a0a0a;
    height: 100vh;
    width: 100vw;
`;

const Main = () => {
    return(
    <MainContainer>
        <Navbar />
        <Home />
    </MainContainer>
    )
}

export default Main;