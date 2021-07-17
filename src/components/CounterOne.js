import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        [`${action.counter}Counter`]:
          state[`${action.counter}Counter`] + action.value,
      };
    case "decrement":
      return {
        ...state,
        [`${action.counter}Counter`]:
          state[`${action.counter}Counter`] - action.value,
      };
    case "reset":
      return {
        ...state,
        [`${action.counter}Counter`]: initialState[`${action.counter}Counter`],
      };
    default:
      return state;
  }
};

const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <React.Fragment>
      <div>
        <div>Count - {count.firstCounter}</div>
        <button
          onClick={() =>
            dispatch({ type: "increment", value: 1, counter: "first" })
          }
        >
          Increment
        </button>
        <button
          onClick={() =>
            dispatch({ type: "decrement", value: 1, counter: "first" })
          }
        >
          Decrement
        </button>
        <button
          onClick={() =>
            dispatch({ type: "increment", value: 5, counter: "first" })
          }
        >
          Increment 5
        </button>
        <button
          onClick={() =>
            dispatch({ type: "decrement", value: 5, counter: "first" })
          }
        >
          Decrement 5
        </button>
        <button onClick={() => dispatch({ type: "reset", counter: "first" })}>
          Reset
        </button>
      </div>

      <div>
        <div>Count - {count.secondCounter}</div>
        <button
          onClick={() =>
            dispatch({ type: "increment", value: 1, counter: "second" })
          }
        >
          Increment
        </button>
        <button
          onClick={() =>
            dispatch({ type: "decrement", value: 1, counter: "second" })
          }
        >
          Decrement
        </button>
        <button
          onClick={() =>
            dispatch({ type: "increment", value: 5, counter: "second" })
          }
        >
          Increment 5
        </button>
        <button
          onClick={() =>
            dispatch({ type: "decrement", value: 5, counter: "second" })
          }
        >
          Decrement 5
        </button>
        <button onClick={() => dispatch({ type: "reset", counter: "second" })}>
          Reset
        </button>
      </div>
    </React.Fragment>
  );
};

export default CounterOne;
