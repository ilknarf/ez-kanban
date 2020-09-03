import styled from 'styled-components';

const CardDiv = styled.div.attrs(props => ({
    baseColor: props.baseColor,
}))`
    border: 1px solid gray;
    border-radius: 2px;
    background-color: ${props => props.baseColor};
    padding: 5px 10px;
    margin: 5px 10px 7.5px;
`

const CardTitle = styled.h5`
    
`

export { CardDiv, CardTitle };