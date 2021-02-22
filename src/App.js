import './App.scss';

import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

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
    localStorage.setItem('btnCount', btnCount + 1)

    if (label === 'increment') {
      setCount(count + 1);
      localStorage.setItem('incCount', incCount + 1)
      localStorage.setItem('count', count + 1)
    }
    else if (label === 'decrement'){
      setCount(count - 1)
      localStorage.setItem('decCount', decCount + 1)
      localStorage.setItem('count', count - 1)
    }
    else if (label === 'reset'){
      setCount(0)
      localStorage.setItem('rstCount', rstCount + 1)
      localStorage.setItem('count', 0)
    }

    cookies.set("counter", "counterId", {path: '/', maxAge: 10000000})
    console.log(cookies.get('counter'))
  }

  useEffect(() => {
    const initialBtnCount = Number(localStorage.getItem('btnCount'))
    const initialCount = Number(localStorage.getItem('count'))
    const initialIncCount = Number(localStorage.getItem('incCount'))
    const initialDecCount = Number(localStorage.getItem('decCount'))
    const initialRstCount = Number(localStorage.getItem('rstCount'))
    if (initialBtnCount) setBtnCount(initialBtnCount)
    if (initialCount) setCount(initialCount)
    if (initialIncCount) setIncCount(initialIncCount)
    if (initialDecCount) setDecCount(initialDecCount)
    if (initialRstCount) setRstCount(initialRstCount)
  }, []);

  return (
    <div className='counter'>
      <p>Counter: {count}</p>
      <p>Number of button clicks: {btnCount}</p>
      <p>Number of reset button clicks: {rstCount}</p>
      <p>Number of increment button clicks: {incCount}</p>
      <p>Number of decrement button clicks: {decCount}</p>
      <div class="buttons">
        <button class="reset-button" onClick={() => buttonClickHandler(setRstCount, rstCount, 'reset')} >
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
