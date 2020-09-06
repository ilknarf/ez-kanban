import styled from 'styled-components';

/*
const CardOuter = styled.div`
    margin: 5px 5px 7.5px;
    padding: 1px 1px 2px;
    border-radius: 2px;
`
 */

// ${props => props.isDragging? 'border: 1px dashed black;': null} // looks terrible lol

const CardDiv = styled.div`
    border-left: 5px solid #77caea;
    border-radius: 2px;
    background-color: white;
    transition background-color 0.12s ease-in;
    
    ${props => props.isDragging? 'box-shadow: 0px 1px 5px 1px #888888;': null} 
    transition: box-shadow 0.1s linear;
    
    padding: .5em 1em;
    margin: .25em .5em .5em;

    
    &:hover {
        background-color: aliceblue;
    }
`

const CardTitle = styled.h5`
    
`

export { CardDiv, CardTitle };