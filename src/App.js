import React, { useState, useReducer } from 'react';
import '@atlaskit/css-reset';

import { DragDropContext } from 'react-beautiful-dnd';

import Card from './components/Card';
import Column from './components/Column';

import Baseline from './styles/Baseline';

const data = {
    items: {
        PFX1: {
            id: 'PFX1',
            title: 'hello',
            content: 'nothing',
        },
        PFX2: {
            id: 'PFX2',
            title: 'hello',
            content: 'nothing',
        },
        PFX3: {
            id: 'PFX3',
            title: 'hello',
            content: 'nothing',
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

function App() {
  return (
    <Baseline>
        <DragDropContext>
            {data.columnOrder.map((colId, i) => (
                    <Column key={colId} id={colId} name={data.columns[colId].name}>
                        {data.columns[colId].items.map(key => data.items[key])}
                    </Column>
                )
            )}
        </DragDropContext>
    </Baseline>
  );
}

export default App;
