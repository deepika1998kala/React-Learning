import React, {useState} from 'react';


function Counter() {
  const [counter , setCounter] = useState(0);

  function addCounter(){
    setCounter(counter+1);
  }
  function reduceCounter(){
    setCounter(counter-1);
  }
  return (
    <div className='counter-div'>
      <h1 >Counter App</h1>
      <h2 className='counter-h2'>Counter:{counter}</h2>
      <button className='counter-btn' type="button" onClick={addCounter}>Increase Counter</button>
      <button className='counter-btn' onClick={reduceCounter}>Decrease Counter</button>
    </div>
  );
}

export default Counter;
