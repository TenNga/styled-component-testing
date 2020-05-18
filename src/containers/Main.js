import React from 'react';
import Styled from 'styled-components';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import {color} from '../tools/theme';

const MainContainer = Styled.div`
    background-color: ${color.primary};
    height: 100vh;
    width: 100vw;
`;

class Main extends React.Component {

state = {
    color: color.primary
}


ChangeBackground = () => {
    this.setState({color: "white"})
    color.primary = "white"
}

    render(){
        console.log("P Color: ", color.primary)
        return(
        <MainContainer>
            <Navbar />
            <Home />
            <Footer changeBg ={this.ChangeBackground}/>
        </MainContainer>
        )
    }
}

export default Main;