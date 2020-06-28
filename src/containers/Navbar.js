import React from 'react';
import Styled from 'styled-components';

const NavbarContainer = Styled.div `
    width: 100vw;
    position: relative;
    left: 0;
    top: 0;
    padding: 0.8rem;
    border-bottom: 1px solid white;
`;

const List = Styled.ul `
    display: flex;
    justify-content: space-around;
    color: white;
    padding: 10px 5px;
    list-style: none;
    
`;

const ListItem = Styled.li `
    border-radius: 50px;
    background: #404040;
    box-shadow: inset 8px 8px 16px #363636, 
            inset -8px -8px 16px #4a4a4a;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    padding: 1rem;
`;

const Navbar = () => {
    return(
        <NavbarContainer>
            <List>
                <ListItem>Projects</ListItem>
                <ListItem>Resume</ListItem>
                <ListItem>Contact</ListItem>
            </List>
        </NavbarContainer>

    )
}
export default Navbar;