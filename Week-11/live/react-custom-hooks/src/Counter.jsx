import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount((count) => count + 1);
  };

  return {
    count,
    increaseCount,
  };
};

export const Counter = () => {
    const { count, increaseCount } = useCounter();
    return (
      <div>
        <button onClick={increaseCount}>Increase {count}</button>
      </div>
    );
  };