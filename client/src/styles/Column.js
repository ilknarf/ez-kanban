import styled from 'styled-components';

const ColumnDiv = styled.div`
    flex: 1;
    background-color: #e3e1de;
    border-radius: 2px;
    box-shadow: 0px 1px ${props => props.isDraggingOver? '3px 1px': '3px 0px'} #888888;
    transition: box-shadow 0.1s linear;
    margin: 0rem .5rem .25rem;
    
    display: flex;
    flex-direction: column;
`

const ListDiv=styled.div`
    flex: 1;
    
    display: flex;
    flex-direction: column;
`

const ColumnHeader = styled.h5`
    padding: 1rem;
`

export { ColumnDiv, ColumnHeader, ListDiv };