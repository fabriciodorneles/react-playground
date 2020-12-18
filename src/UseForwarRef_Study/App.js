import React, {useEffect, useRef} from 'react';
import Input from './Input';

function App() {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus();
    console.log({inputRef});
  }, []);
  return (
    <div>
      <Input ref={inputRef} />
    </div>
  );
}

export default App;
