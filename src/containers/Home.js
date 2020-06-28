import React from 'react';
import Styled from 'styled-components';
import styled from 'styled-components';

const HomeContainer = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: white;
    padding: 1rem;
`;

const HomeHeading = Styled.h1`
    position: relative;
    top:0;
    right: -258px;
    font-weight: bolder;
    text-align: center;
    font-size: 7rem;
    z-index: 2;
`;

const HomeSubHeading = Styled.h3`
    font-style: italic;
    font-weight: lighter;
    position: relative;
    left: -100px;
`;
const SubHeadingText = Styled.div`
    border-radius: 10px;
    background: #404040;
    box-shadow: inset 8px 8px 16px #363636, 
                inset -8px -8px 16px #4a4a4a;
    width: 300px;
    text-align: left;
    position: relative;
    right: -360px;
    padding: 30px;
`;
const Text = Styled.div`
    margin: 10px;
`;

const IndexImg = Styled.div `
    position: relative;
    top: 0;
    left: -100px;
    > img {
        border-radius: 10px;
    }
`;

const Home = () => {
    return(
        <HomeContainer>
            <Text>
                <HomeHeading>Kevin Karma</HomeHeading>
                  <SubHeadingText>
                      <HomeSubHeading>
                        Front-End Developer experience in building eye catching desing
                        </HomeSubHeading>
                </SubHeadingText>
            </Text>
            <IndexImg>
            <img src="https://avatars2.githubusercontent.com/u/18019562?s=400&u=8597640c2a45d3f73cd158a18e3411e68d1f11d5&v=4" />
            </IndexImg>
        </HomeContainer>
    )
}

export default Home;