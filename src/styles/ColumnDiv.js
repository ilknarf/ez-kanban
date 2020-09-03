import styled from 'styled-components';

const ColumnDiv = styled.div.attrs(props => ({
    baseColor: props.baseColor,
}))`
    background-color: ${props => props.baseColor || 'lightblue'};
    width: 30em;
    border: .05rem solid #807f7d;
    flex: 1;
`

export default ColumnDiv;