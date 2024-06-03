import './App.css'
import { useState } from 'react';


function App() {
  // let counter = 0;
  let [counter,setCounter] = useState(0);
  const increment = ()=>{
    counter=counter+1;
    setCounter(counter);
  }
  const decrement = ()=>{
    if(counter == 0)
        return ;
    counter = counter-1;
    setCounter(counter);
  }
  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
