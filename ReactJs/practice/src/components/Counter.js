import React from 'react'
import { useState } from 'react'
function Counter() {
    const [counter, setCounter] = useState(0)
  return (
    <div>
        <h1>Counter: {counter}</h1>
        <button className='btn' onClick={() => setCounter(counter + 1)}>Increment</button> <br />
        <button className='btn' onClick={() => setCounter(counter - 1)}>Decrement</button>
        <hr />
    </div>
  )
}

export default Counter
