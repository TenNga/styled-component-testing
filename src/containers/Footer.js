import React from 'react';
import Styled from 'styled-components';

const Footer = ({changeBg}) => {
    const FooterContainer = Styled.div `
        display: flex;
        justify-content: space-around;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100vw;
    `;

    const ColorPicker = Styled.h3`
        color: white;
    `;

    const FontPicker = Styled(ColorPicker) `

    `;

    const handleColorPick = () => {
        changeBg();
    }

    const handleFontPick = () => {
        console.log("Font Pick Clicked")
    }
    return(
        <FooterContainer>
            <ColorPicker onClick={handleColorPick}>
                Color
            </ColorPicker>
            <FontPicker onClick={handleFontPick}>
                Font
            </FontPicker>
        </FooterContainer>
    )
}

export default Footer;