import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({
      type: 'INC',
    });
  };

  const decrement = () => {
    dispatch({
      type: 'DEC',
    });
  };

  const reset = () => {
    dispatch({
      type: 'RESET',
    });
  };

  return (
    <div>
      <div className='title'>
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <div className='underline'></div>
      </div>
      <div className='btn-container'>
        <button onClick={increment} className='btn'>
          Increment
        </button>
        <button onClick={decrement} className='btn'>
          Decrement
        </button>
        <button onClick={reset} className='btn'>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
