import React, { useEffect, useState } from "react";
import { FibonacciNumbers, GenerateFibonacci } from "../Utils/FibonacciFunc";
import styles from "../Styles/Fibonacci.module.scss"

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
    <div className={styles.fibonacci_container + " container"}>
      <div>
        <h1>Fibonacci</h1>
      </div>
      <div className={styles.fibonacci_result}>
        {fibonacci.map((item, index) => {
          return <p key={index}>{item} </p>;
        })}
      </div>
      <div>
        <button className={styles.fibonacci_button} onClick={handleClick}>
          Generar
        </button>
      </div>
    </div>
  );
}

export default Fibonacci;
