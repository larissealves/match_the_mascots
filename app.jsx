import { useState } from 'react';

import NewMessage from './components/NewMessage';
import Board from './components/Board';

function App() {

  return (
    <div>
      <Board/>
      <NewMessage/>
    </div>
  );
}

export default App;
