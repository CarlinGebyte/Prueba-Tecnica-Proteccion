import React, { useState } from 'react'
import GenerateFibonacci from '../Utils/FibonacciFunc'

function Fibonacci() {
    const initialState = []
    const [fibonacci, setFibonacci] = useState(initialState);
    GenerateFibonacci()
  return (
    <div>Fibonacci</div>
  )
}

export default Fibonacci