import React, { useState } from 'react';
import CharPicker from './components/CharPicker';
import Character from './components/Character';

const App = () => {
  const [selectedChar, setSelectedChar] = useState(1)
  const [selectedSide, setSelectedSide] = useState('light')
  const [destroyed, setDestroyed] = useState(false)

  const sideHandler = side => {
    setSelectedSide(side)
  }

  const charSelectHandler = event => {
    const charId = event.target.value;
    setSelectedChar(charId)
  }

  const destructionHandler = () => {
    setDestroyed(true)
  }

  let content = (
    <React.Fragment>
      <CharPicker
        side={selectedSide}
        selectedChar={selectedChar}
        onCharSelect={charSelectHandler}
      />
      <Character selectedChar={selectedChar} />
      <button onClick={() => sideHandler('light')}>
        Light Side
        </button>
      <button onClick={() => sideHandler('dark')}>Dark Side</button>
      {selectedSide === 'dark' && (
        <button onClick={destructionHandler}>DESTROY!</button>
      )}
    </React.Fragment>
  );

  if (destroyed) {
    content = <h1>Total destruction!</h1>;
  }
  return content;
}

export default App
