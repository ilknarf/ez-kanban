import React from 'react';

import { NavbarContainer, MenuButtonDiv, MenuSpacer, MenuItemText } from '../styles/Navbar';

import Logo from '../components/Logo';

function Navbar(props) {
    return(
        <NavbarContainer>
            <Logo />
            <MenuSpacer />
            <MenuButtonDiv>
                <MenuItemText>
                    Menu
                </MenuItemText>
            </MenuButtonDiv>
        </NavbarContainer>
    )
}

export default Navbar;