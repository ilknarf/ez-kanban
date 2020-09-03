import styled from 'styled-components';

const ColumnDiv = styled.div.attrs(props => ({
    baseColor: props.baseColor,
}))`
    flex: 1;
    background-color: ${props => props.baseColor || 'lightblue'};
    border: 1px solid #807f7d;
    border-radius: 2px;
    margin: 10px;
    box-shadow: 0px 0px 1px 1px grey;
    
    display: flex;
    flex-direction: column;
`

const ListDiv=styled.div`
    flex: 1;
    
    display: flex;
    flex-direction: column;
`

const ColumnHeader = styled.h3`
    padding: 5px 10px 2.5px;
    background-color: lightgreen;
`

export { ColumnDiv, ColumnHeader, ListDiv };