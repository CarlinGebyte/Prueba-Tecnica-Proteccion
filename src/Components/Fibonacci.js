import React, { useEffect, useState } from "react";
import { FibonacciNumbers, GenerateFibonacci } from "../Utils/FibonacciFunc";

function Fibonacci() {
  const initialState = [];
  const [fibonacci, setFibonacci] = useState(initialState);

  const handleClick = () => {
    const numbers = FibonacciNumbers();
    let rep, indexX, indexY;
    rep = numbers[0];
    indexX = numbers[1];
    indexY = numbers[2];
    console.log(rep, indexX, indexY);
    let result = GenerateFibonacci(rep, indexX, indexY);
    setFibonacci(result);
  };
  useEffect(() => {
    console.log(fibonacci);
  }, [fibonacci]);
  return (
    <div>
      <div>
        <h1>Fibonacci</h1>
        <p>Fibonacci para las semillas </p>
      </div>
      <div>
        {fibonacci.map((item, index) => {
          return <p key={index}>{item}, </p>;
        })}
      </div>
      <div>
        <button onClick={handleClick}>Generar</button>
      </div>
    </div>
  );
}

export default Fibonacci;
