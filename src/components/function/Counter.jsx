import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../../store/Index';

function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(action.increment());
  };

  const decrement = () => {
    dispatch(action.decrement());
  };

  const reset = () => {
    dispatch(action.reset());
  };

  return (
    <div className='container'>
      <div className='title'>
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <div>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
