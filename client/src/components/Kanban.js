import React, {useReducer, useState} from 'react';

import { getServerSideState, sendMoveRequest } from "../controllers/websockets";

import { KanbanButton, KanbanButtonContainer, KanbanContainer, KanbanWrapper } from '../styles/Kanban';
import { DragDropContext } from 'react-beautiful-dnd';

import Column from './Column';

const address = process.env.REACT_APP_HOST_ADDRESS || 'localhost:8080';
const ws = new WebSocket(`ws://${address}/wss`);

const defaultData = {
    items: {},
    columns: {
        todo: {
            name: 'To Do',
            id: 'todo',
            items: [],
        },
        waiting: {
            name: 'Waiting/Blocked',
            id: 'waiting',
            items: [],
        },
        inProgress: {
            name: 'In Progress',
            id: 'inProgress',
            items: [],
        },
        finished: {
            name: 'Finished',
            id: 'finished',
            items: [],
        }
    },
    columnOrder: ['todo', 'waiting', 'inProgress', 'finished'],
};

function reducer(columns, result) {
    try {

        // if (result.messageType === 'GetState') {
        //     console.log(result.data);
        //     return result.data.columns;
        // }

        if (result.request === 'SetState') {
            return {
                todo: {
                    name: 'To Do',
                    id: 'todo',
                    items: result.columns.todo,
                },
                waiting: {
                    name: 'Waiting',
                    id: 'waiting',
                    items: result.columns.waiting,
                },
                inProgress: {
                    name: 'In Progress',
                    id: 'inProgress',
                    items: result.columns.inProgress,
                },
                finished: {
                    name: 'Finished',
                    id: 'finished',
                    items: result.columns.finished,
                },
            };
        }

        let fromRemote = false;

        if (result.request === 'MoveCard') {
            result = result.args[0];
            console.log(result);
            fromRemote = true;
        }

        if (result.destination === null) {
            return columns;
        }

        const sourceId = result.source.droppableId;
        const destId = result.destination.droppableId;

        const valAtDest = columns[destId][result.destination.index];
        if (valAtDest === result.draggableId) {
            return columns;
        }

        let col = {...columns};

        // send WebSocket request

        if (result.source.droppableId === result.destination.droppableId) {
            const arr = col[sourceId].items;

            if (result.source.index !== result.destination.index) {
                const temp = arr[result.source.index];

                // check if valid request
                if (result.draggableId === arr[result.source.index]) {
                    arr[result.source.index] = arr[result.destination.index];
                    arr[result.destination.index] = temp;

                    // send server request if original request
                    if (!fromRemote) {
                        sendMoveRequest(ws, result);
                    }
                }
            }
        } else {
            let sourceArr = col[sourceId].items;
            const sourceIndex = result.source.index;
            const item = sourceArr[sourceIndex];

            // check if valid request
            if (sourceArr[sourceIndex] === result.draggableId) {
                sourceArr.splice(sourceIndex, 1);

                let destArr = col[destId].items;
                destArr.splice(result.destination.index, 0, item);

                if (!fromRemote) {
                    sendMoveRequest(ws, result);
                }
            }
        }

        console.log(col);
        return col;
    } catch (e) {
        console.error(e, result);
        return columns;
    }
}

function Kanban(props) {
    const [dragging, setDragging] = useState(false);
    const [columns, colDispatch] = useReducer(reducer, defaultData.columns);
    const [data, setData] = useState(defaultData);

    ws.onopen = () => getServerSideState(ws, 'hello'); // TODO replace with ID
    ws.onmessage = (event) => {
        if (event.returnValue) {
            try {
                const data = JSON.parse(event.data);
                data.forEach(message => {
                    if (message.messageType === 'SetState') {
                        const columnOrder = ['todo', 'waiting', 'inProgress', 'finished'];
                        setData({
                            items: message.data.cards,
                            columnOrder,
                        });

                        message.data.request = 'SetState';
                        colDispatch(message.data);
                    } else {
                        message.data.request = message.messageType;
                        colDispatch(message.data);
                    }
                });
            } catch (e) {
                console.error(e);
            }
        }
    };

    function onDragStart() {
        setDragging(true);
    }

    function onDragEnd(result) {
        colDispatch(result);
        setDragging(false);
    }

    return (
        <KanbanWrapper dragging={dragging}>
            <KanbanButtonContainer>
                <KanbanButton>
                    <strong>
                        Add Card
                    </strong>
                </KanbanButton>
            </KanbanButtonContainer>
            <KanbanContainer>
                <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
                    {data.columnOrder.map(colId => (
                            <Column key={colId} id={colId} name={columns[colId].name}>
                                {columns[colId].items.map(key => data.items[key])}
                            </Column>
                        )
                    )}
                </DragDropContext>
            </KanbanContainer>
        </KanbanWrapper>
    );
}

export default Kanban;