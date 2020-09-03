import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Card from '../components/Card';
import { ColumnDiv, ColumnHeader, ListDiv } from '../styles/Column';

function Column(props) {
    const { children, name, id } = props;

    return (
        <Droppable droppableId={id}>
            {(provided, snapshot) => (
                <ColumnDiv
                    baseColor="lightgray"
                >
                    <ColumnHeader>
                        {name}
                    </ColumnHeader>
                    <ListDiv
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {children.map((item, index) => (
                            (<Card key={item.id} card={item} index={index} />)
                        ))}
                    {provided.placeholder}
                    </ListDiv>
                </ColumnDiv>
            )}
        </Droppable>
    )
}

export default Column;