import React from 'react'
import { useDispatch } from 'react-redux';

import { increaseCounter, decreaseCounter } from '../../redux/counter/counterActions';

const Counter = ({counterValue = 0}) => {
  const dispatch = useDispatch();

  const handleDecrease = () => dispatch(decreaseCounter(1))
  
  const handleIncrease = () => dispatch(increaseCounter(1))

  return (
    <div>
        <button onClick={handleDecrease}>-</button>
        <span>
            {counterValue}
        </span>
        <button onClick={handleIncrease}>+</button>
    </div>
  )
}

export default Counter