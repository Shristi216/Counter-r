import React, { useState } from 'react'
import {useSelector, useDispatch} from "react-redux";
import { increment,decrement,reset,incrementByAmount } from './CounterSlice';

const Counter = () => {
    const count = useSelector((state)=> state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount,setincrementAmount]=useState(0);
    const addValue =Number(incrementAmount) || 0;
    const resetAll =()=>{
        setincrementAmount(0);
    dispatch(reset());
    }
  return (
    <selection>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>

        <input
          type="text"
          value={incrementAmount}
          onChange={(e) => setincrementAmount(e.target.value)}
        />
        <div>
          <button onClick={() => dispatch(incrementByAmount(addValue))}>
            Add Amount
          </button>
        </div>
        <button onClick={resetAll}>Reset</button>
      </div>
    </selection>
  );
}

export default Counter
