import { useState } from "react";
import cl from "./counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount (count + 1);
  }
  const dicrement = () => {
    setCount (count - 1);
  }
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>{count}</p>
      <button onClick={dicrement}>Dicrement</button>
    </div>
  )
}