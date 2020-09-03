import React from 'react';

import Card from './components/Card';
import Column from './components/Column';

import Baseline from './styles/Baseline';

function App() {
  return (
    <Baseline>
        <Column>
            <Card title="Hello">
                This is a card.
            </Card>
            <Card title="Goodbye">
                This is another card.
            </Card>
            <Card title="WOOT">
                This is yet another card.
            </Card>
        </Column>
    </Baseline>
  );
}

export default App;
