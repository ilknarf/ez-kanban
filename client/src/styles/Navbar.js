import styled from 'styled-components';

const NavbarContainer = styled.nav`
     margin: 0;
     height: 4em;
     padding: 0px 20px;
     
     display: flex;
     flex-direction: row;
`

const MenuButton = styled.div`
    border: 1px solid lightgray;
    padding: 0.5em 1em;
    border-radius: 1.5em;
    
    height: 1.25em;
    margin: 1em;
    line-height: 1.25em;
`

const MenuSpacer = styled.div`
    flex: 1;
`

export { NavbarContainer, MenuButton, MenuSpacer  };