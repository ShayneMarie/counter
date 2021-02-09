import './App.scss';

import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  //add number of times a button is clicked
  //number of times each button is clicked
  const [count, setCount] = useState(0);
  const [btnCount, setBtnCount] = useState(0);
  const [rstCount, setRstCount] = useState(0);
  const [incCount, setIncCount] = useState(0);
  const [decCount, setDecCount] = useState(0);

  function buttonClickHandler(setButton, button, label){
    setBtnCount(btnCount + 1)
    setButton(button + 1)

    if (label === 'increment')
      setCount(count + 1)
    else if (label === 'decrement')
      setCount(count - 1)
    else if (label === 'reset')
      setCount(0)
  }

  return (
    <div className='counter'>
      <p>Counter: {count}</p>
      <p>Number of button clicks: {btnCount}</p>
      <p>Number of reset button clicks: {rstCount}</p>
      <p>Number of increment button clicks: {incCount}</p>
      <p>Number of decrement button clicks: {decCount}</p>
      <div class="buttons">
        <button class="reset-button" onClick={() => buttonClickHandler(setRstCount, rstCount, 'reset')}>
          Reset
        </button>
        <button class="increment-button" onClick={() => buttonClickHandler(setIncCount, incCount, 'increment')}>
          Increment
        </button>
        <button class="decrement-button" onClick={() => buttonClickHandler(setDecCount, decCount, 'decrement')}>
          Decrement
        </button>      
      </div>
    </div>
  );
}

export default Example;
