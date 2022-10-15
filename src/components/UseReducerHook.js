import React, { useReducer } from "react";

const UseReducerHook = () => {
  const initialState = 0;
  const myReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case "increment":
        return state + payload;
      case "decrement":
        return state - payload;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(myReducer, initialState);

  return (
    <div>
      <h2>UseReducerHook practice</h2>
      <h2>count: {count}</h2>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment by 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement by 1
      </button>
      <hr />
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        Decrement by 5
      </button>
    </div>
  );
};

export default UseReducerHook;
