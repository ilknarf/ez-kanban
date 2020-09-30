import styled from 'styled-components';

const KanbanWrapper = styled.div`
    padding: 1rem 0rem;
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const KanbanContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    padding: 0rem 1rem;
`;

const KanbanButton = styled.button`
    display: block;
    
    line-height: 1rem;
    padding: 0.75em 1.25em;
    
    text-decoration: none;
    text-align: center;
    
    background-color: #e3e1de;
    color: #77caea;
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
    padding: 1rem 1.5rem;
`;

export { KanbanContainer, KanbanButton, KanbanButtonContainer, KanbanWrapper };