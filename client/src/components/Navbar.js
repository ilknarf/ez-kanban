import React from 'react';

import { NavbarContainer, MenuButton, MenuSpacer } from '../styles/Navbar';

function Navbar(props) {
    return(
        <NavbarContainer>
            <div>
                Hello
            </div>
            <MenuSpacer />
            <MenuButton>
                Hello
            </MenuButton>
        </NavbarContainer>
    )
}

export default Navbar;