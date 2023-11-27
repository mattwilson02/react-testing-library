import { useState } from "react";

type Props = {
  initialCount: number;
};

const Counter = ({ initialCount }: Props) => {
  const [count, setCount] = useState(initialCount);

  return (
    <>
      <h1>Count:</h1>
      <h3 data-testid="count">{count}</h3>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Restart</button>
    </>
  );
};

export default Counter;
