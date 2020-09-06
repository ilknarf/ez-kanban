import styled from 'styled-components';

const NavbarContainer = styled.nav`
     padding: 1em 30px;
     
     display: flex;
     flex-direction: row;
     
     background-color: #77caea;
`

const Button = styled.div`
    height: 1.25em;
    line-height: 1.25em;
    padding: 0.5em 1em;
    
    margin: 0.75em 0;
`

const MenuButton = styled(Button)`
    border-radius: 1.25em;
    box-shadow: 0px 2px 2px 0px #888888;
    
    background-color: white;
    
    &:hover {
        box-shadow: 0px 2px 4px 1px #888888;
    }
`

const MenuSpacer = styled.div`
    flex: 1;
`

export { NavbarContainer, Button, MenuButton, MenuSpacer };