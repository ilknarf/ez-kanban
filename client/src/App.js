import React from 'react';
import '@atlaskit/css-reset';

import Baseline from './styles/Baseline';

import Navbar from './components/Navbar';
import Kanban from './components/Kanban';

function App() {
    return (
        <Baseline>
            <Navbar />
            <Kanban />
        </Baseline>
    )
}

export default App;
