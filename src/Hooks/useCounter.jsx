import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  function IncreaseCounter() {
    setCount((prev) => prev + 1);
  }
  function DecreseCounter() {
    setCount((prev) => prev - 1);
  }
  function reset() {
    setCount(0);
  }

  return { count, IncreaseCounter, DecreseCounter, reset };
};
export default useCounter;
