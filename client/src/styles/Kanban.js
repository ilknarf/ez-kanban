import styled from 'styled-components';

const KanbanWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    
    background-color: ${props => props.dragging? '#fa6048': 'white'};
    transition: background-color 0.25s ease-in-out;
`;

const KanbanContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    margin: 0rem 1rem;
`;

const KanbanButton = styled.button`
    display: block;
    
    line-height: 1rem;
    padding: 0.75em .75em;
    
    text-decoration: none;
    text-align: center;
    
    background-color: #e3e1de;
    color: black;
    border: 0px;
    border-radius: 4px;
        
    &:focus {
        border: none;
        outline: none;
    }
    
    &:hover {
        box-shadow: 0px 1px 2px 0px #888888;
        cursor: pointer;
    }
`;

const KanbanButtonContainer = styled.div`
    margin: 1rem 1.5rem;
`;

export { KanbanContainer, KanbanButton, KanbanButtonContainer, KanbanWrapper };