import React from 'react';
import './App.css';
import {CountProvider, useCount} from './count-context';

function Counter() {
  const {count, increment} = useCount();

  return <button onClick={increment}>{count}</button>
}

function CountDisplay() {
  const {count} = useCount();
  return <div> The current counter count is {count}</div>
}

function App() {
  return (
    <CountProvider>
      <CountDisplay/>
      <Counter />
    </CountProvider>
  );
}

export default App;

// function Counter({count, onIncrementClick}) {
//   return <button onClick={onIncrementClick}>{count}</button>
// }

// function CountDisplay({count}) {
//   return <div> The current counter count is {count}</div>
// }

// function App() {
//   const [count, setCount] = React.useState(0);
//   const increment = () => setCount(c=>c+1);
//   return (
//     <div>
//       <CountDisplay count={count}/>
//       <Counter count={count} onIncrementClick={increment}/>
//     </div>
//   );
// }