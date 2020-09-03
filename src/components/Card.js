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
                    baseColor="white"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
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

