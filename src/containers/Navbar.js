import React from 'react';
import Styled from 'styled-components';

const NavbarContainer = Styled.div `
    width: 100vw;
    position: absolute;
    left: 0;
    top: 0;
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
    text-transform: uppercase;
    font-weight: bolder;
    letter-spacing: 2px;
    cursor: pointer;
    padding: 3px;
    &:hover {
        border-left: 2px solid white;
        border-top: 1px solid white;
    }
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