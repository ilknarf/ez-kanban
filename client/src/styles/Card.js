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
    transition background-color 0.12s ease-in box-shadow 0.12s linear;
    
    box-shadow: 0px 1px ${props => props.isDragging? '5px 1px': '1px 1px'} #888888;
    box-shadow: 0px 1px ${props => props.isDragging? '5px 1px': '3px 0px'} #888888;
    transition: box-shadow 0.1s linear;
    
    opacity: ${props => props.isDragging && props.draggingOver === null? '0.5': '1'};
    
    padding: .5em 1em;
    margin: .25em .5em .5em;
    
    &:hover {
        background-color: aliceblue;
    }
`;

const CardTitle = styled.h5`
    
`;

export { CardDiv, CardTitle };