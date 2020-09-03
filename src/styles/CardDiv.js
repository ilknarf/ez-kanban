import styled from 'styled-components';

const CardDiv = styled.div.attrs(props => ({
    baseColor: props.baseColor,
}))`
    border: .05rem solid gray;
    background-color: ${props => props.baseColor};
    padding: 0 1.5rem;
    margin: 0.5rem 0.5rem;
`

export default CardDiv;