import React from 'react';
import Styled from 'styled-components';

const NavbarContainer = Styled.div `
    width: 100vw;
`;

const List = Styled.ul `
    display: flex;
    justify-content: space-around;
    color: white;
    padding: 10px 5px;
    list-style: none;
    border-bottom: 1px solid white;
`;

const ListItem = Styled.li `
    text-transform: uppercase;
    font-weight: bolder;
    letter-spacing: 2px;
`;

const Navbar = () => {
    return(
        <NavbarContainer>
            <List>
                <ListItem>About</ListItem>
                <ListItem>Projects</ListItem>
                <ListItem>Resume</ListItem>
                <ListItem>Contact</ListItem>
            </List>
        </NavbarContainer>

    )
}
export default Navbar;