import { useLayoutEffect, useState } from 'react'
import './App.css'
import { Key } from './components/key'
import { Row } from './components/row'
import { start, keys, getKeyName } from './helper';

function App() {

  useLayoutEffect(() => {
    start()
  }, []);

  return (
    <div className="App">
      <h1>Neumorphism Keyboard</h1>
      <div className="keyboard">
        {Object.keys(keys).map((rowName => (
          <Row key={rowName} name={rowName}>
            {keys[rowName].map(keyName => (
              <Key key={keyName} name={getKeyName(keyName)} text={keyName} />
            ))}
          </Row>
        )))}
      </div>
    </div>
  )
}

export default App
