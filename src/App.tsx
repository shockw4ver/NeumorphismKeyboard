import { useLayoutEffect } from 'react'
import './App.css'
import { Key } from './components/key';
import { Row } from './components/row';
import { Stage } from './components/stage/stage';
import { start, keys, getKeyName } from './helper';

function App() {

  useLayoutEffect(() => {
    start()
  }, []);

  return (
    <Stage className="App">
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
    </Stage>
  )
}

export default App
