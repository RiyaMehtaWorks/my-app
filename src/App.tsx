import { useState, useCallback } from "react";
import Child from "./components/Child";

export default function App() {
  const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   console.log("Button clicked");
  // };

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <Child onClick={handleClick} />
    </div>
  );
}
