import styled from 'styled-components';

const NavbarContainer = styled.nav`
     padding: 1em 1.5rem;
     
     display: flex;
     flex-direction: row;
     
     background-color: #77caea;
`

const NavbarButton = styled.button`
    display: block;
    
    line-height: 3rem;
    padding: 1em 1.5em;
    margin: .75em 0em;
    
    text-decoration: none;
    text-align: center;
    
    color: inherit;
    background-color: inherit;
    border: 0px;
    
    &:focus {
        border: none;
        outline: none;
    }
    
    &:hover {
        cursor: pointer;
    }
`

const MenuButtonDiv = styled(NavbarButton)`
    border-radius: 2em;
    box-shadow: 0px 1px 2px 0px #888888;

    background-color: white;
        
    &:hover {
        box-shadow: 0px 2px 4px 0px #888888;
    }
`

const MenuItemText = styled.h4`
    color: #77caea;
`

const MenuSpacer = styled.div`
    flex: 1;
`

export { NavbarContainer, NavbarButton, MenuButtonDiv, MenuSpacer, MenuItemText };