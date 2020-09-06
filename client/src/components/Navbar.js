import React from 'react';

import { NavbarContainer, Button, MenuButton, MenuSpacer } from '../styles/Navbar';

import Logo from '../components/Logo';

function Navbar(props) {
    return(
        <NavbarContainer>
            <Logo />
            <MenuSpacer />
            <MenuButton>
                Hello
            </MenuButton>
        </NavbarContainer>
    )
}

export default Navbar;