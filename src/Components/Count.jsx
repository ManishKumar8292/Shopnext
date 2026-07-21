import useCounter from "../Hooks/useCounter";

const Count = () => {
  const { count, IncreaseCounter, DecreseCounter, reset } = useCounter();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={IncreaseCounter}>Increase Value</button>
      <button onClick={DecreseCounter}>Decrease Value</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Count;
