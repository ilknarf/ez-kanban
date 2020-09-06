import styled from 'styled-components';

const ColumnDiv = styled.div`
    flex: 1;
    background-color: #e3e1de;
    border-radius: 2px;
    ${props => props.isDraggingOver? 'box-shadow: 0px 1px 5px .5px #888888;': null} 
    transition: box-shadow 0.1s linear;
    margin: 5px;
    
    display: flex;
    flex-direction: column;
`

const ListDiv=styled.div`
    flex: 1;
    
    display: flex;
    flex-direction: column;
`

const ColumnHeader = styled.h5`
    padding: 10px;
`

export { ColumnDiv, ColumnHeader, ListDiv };