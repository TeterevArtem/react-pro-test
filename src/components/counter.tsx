import { useState } from "react";
import cls from "./counter.module.scss";

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
      <button className={cls.btn} onClick={increment}>Increment</button>
      <p>{count}</p>
      <button className={cls.btn} onClick={dicrement}>Dicrement</button>
    </div>
  )
}