import React, {useEffect, useRef} from 'react';

function App() {

  function factory() {
    return (a, b) => a + b;
  }
  
  const sum1 = factory();
  const sum2 = factory();
  
  sum1(1, 2); // => 3
  sum2(1, 2); // => 3
  console.log(sum1 === sum1);
  console.log(sum1 === sum2);

  return (
    <div>
      <div > TESTE </div>
    </div>
  );
}

export default App;
