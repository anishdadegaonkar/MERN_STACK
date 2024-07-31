import React from 'react'
import { useState } from 'react'
function Calculator() {
    const [result, setResult] = React.useState('')
    const [number1, setNumber1] = React.useState('')
    const [number2, setNumber2] = React.useState('')
    const handleInput1 = (e) => {
        setNumber1(Number(e.target.value))
    }
    const handleInput2 = (e) => {
        setNumber2(Number(e.target.value))
    }
    const handleAdd = () => {
        setResult(number1 + number2)
    }
    const handleSubtract = () => {
        setResult(number1 - number2)
    }
    

  return (
    <div>
      <input type='number' value={number1} onChange={handleInput1} />
      <input type='number' value={number2} onChange={handleInput2} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
      <p>Result : {result}</p>
      <button onClick={() => setResult(0)}>Clear</button>
      <hr />
    </div>
  )
}

export default Calculator
