import React from 'react';

import { CardDiv, CardTitle } from '../styles/Card';

import { Draggable } from 'react-beautiful-dnd';

function Card(props) {
    const { card, index } = props;
    const { title, id, content } = card;

    return(
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <CardDiv
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                    draggingOver={snapshot.draggingOver}
                >
                    <CardTitle>
                        {title}
                    </CardTitle>
                    {content}
                </CardDiv>
            )}
        </Draggable>
    );
}

export default Card;

