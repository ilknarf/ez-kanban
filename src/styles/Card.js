import styled from 'styled-components';

const CardDiv = styled.div.attrs(props => ({
    baseColor: props.baseColor,
}))`
    border-left: 5px solid lightblue;
    border-radius: 2px;
    background-color: ${props => props.baseColor};
    padding: 5px 10px;
    margin: 5px 5px 7.5px;
`

const CardTitle = styled.h5`
    
`

export { CardDiv, CardTitle };