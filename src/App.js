import React, { useState, useEffect, Fragment  } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  useEffect( () => {
    console.count('In usserEffect, after render')
    console.log(`Count: ${count}`)
  })

  console.count('Rendering')

  return (
    <Fragment>
      <button onClick={ () => setCount( (c) => c-1)}>-</button>
      <h1>Count: {count}</h1>
      <button onClick={ () => setCount( (c) => c+1)}>+</button>
    </Fragment>
  );
}

export default App;
