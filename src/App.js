import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const clickFunction = (count) => {
    setCount(count);
  };
  return (
    <div className="App">
      <h1>Counter Count</h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
          clickFunction(count + 1);
        }}
      >
        Increment
      </button>{" "}
      &nbsp;
      {count > 0 ? (
        <button
          onClick={() => {
            clickFunction(count - 1);
          }}
        >
          Decrement
        </button>
      ) : null}
    </div>
  );
}
