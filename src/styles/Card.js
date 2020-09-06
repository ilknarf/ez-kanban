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
    border-left: 5px solid lightblue;
    border-radius: 2px;
    background-color: white;
    transition background-color 0.12s ease-in;
    
    padding: 5px 10px;
    margin: 5px 5px 7.5px;

    
    &:hover {
        background-color: aliceblue;
    }
`

const CardTitle = styled.h5`
    
`

export { CardDiv, CardTitle };