import React, { useState, useReducer }  from 'react';

import { KanbanContainer } from '../styles/Kanban';
import { DragDropContext } from 'react-beautiful-dnd';

import Column from './Column';

const address = process.env.REACT_APP_HOST_ADDRESS || 'localhost:8080';
const ws = new WebSocket(`ws://${address}/wss`);
ws.onopen = () => console.log(`websocket connected to ${address}`);

window.ws = ws;

const data = {
    items: {
        PFX1: {
            id: 'PFX1',
            title: 'hello',
            content: 'nothing',
        },
        PFX2: {
            id: 'PFX2',
            title: 'goodbye',
            content: 'idk',
        },
        PFX3: {
            id: 'PFX3',
            title: 'wot',
            content: 'something?',
        },
    },
    columns: {
        todo: {
            name: 'To Do',
            id: 'todo',
            items: ['PFX3'],
        },
        waiting: {
            name: 'Waiting/Blocked',
            id: 'waiting',
            items: [],
        },
        inprogress: {
            name: 'In Progress',
            id: 'inprogress',
            items: ['PFX1', 'PFX2'],
        },
        finished: {
            name: 'Finished',
            id: 'finished',
            items: [],
        }
    },
    columnOrder: ['todo', 'waiting', 'inprogress', 'finished'],
}

function reducer(columns, result) {
    if (result.destination === null) {
        return columns;
    }

    let col = {...columns};

    const sourceId = result.source.droppableId;
    const destId = result.destination.droppableId;

    if (result.source.droppableId === result.destination.droppableId) {
        const arr = col[sourceId].items;

        const temp = arr[result.source.index];
        arr[result.source.index] = arr[result.destination.index];
        arr[result.destination.index] = temp;
    } else {
        let sourceArr = col[sourceId].items;
        const sourceIndex = result.source.index;
        const item = sourceArr[sourceIndex];
        sourceArr.splice(sourceIndex, 1);

        let destArr = col[destId].items;
        destArr.splice(result.destination.index, 0, item);
    }

    return col;
}

function Kanban(props) {
    const [columns, colDispatch] = useReducer(reducer, data.columns);

    function onDragEnd(result) {
        colDispatch(result);
    }

    return (
        <KanbanContainer>
            <DragDropContext onDragEnd={onDragEnd}>
                {data.columnOrder.map(colId => (
                        <Column key={colId} id={colId} name={columns[colId].name}>
                            {columns[colId].items.map(key => data.items[key])}
                        </Column>
                    )
                )}
            </DragDropContext>
        </KanbanContainer>
    );
}

export default Kanban;