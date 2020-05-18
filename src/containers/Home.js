import React from 'react';
import Styled from 'styled-components';

const HomeContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: white;
    padding-top: 2rem;
`;

const HomeHeading = Styled.h1`
    font-weight: bolder;
    text-align: center;
    font-size: 6rem;
`;

const HomeSubHeading = Styled.h3`
    font-style: italic;
    font-weight: lighter;
    align-text: center;
`;
const Text = Styled.div`
    margin: 10px;
`;

const Home = () => {
    return(
        <HomeContainer>
            <Text>
                <HomeHeading>Kevin Karma</HomeHeading>
                <HomeSubHeading>Front-End Developer experience in building eye catching desing</HomeSubHeading>
            </Text>
            <img src="https://avatars2.githubusercontent.com/u/18019562?s=400&u=8597640c2a45d3f73cd158a18e3411e68d1f11d5&v=4" />
        </HomeContainer>
    )
}

export default Home;