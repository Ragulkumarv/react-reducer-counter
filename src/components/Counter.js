import { useReducer } from "react";

const Counter = () => {
  const initialState = { count: 0, inputValue: 1 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + state.inputValue };

      case "decrement":
        return { ...state, count: state.count - state.inputValue };

      case "reset":
        return { ...state, count: 0 };

      case "setInputValue":
        return { ...state, inputValue: action.payload };

      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-2xl font-semibold mb-4 text-center">
            Count: {state.count}
          </p>
          <input
            type="number"
            value={state.inputValue}
            placeholder="Lets Count"
            onChange={(e) =>
              dispatch({
                type: "setInputValue",
                payload: Number(e.target.value),
              })
            }
            className="border border-gray-300 p-2 rounded mb-4 text-center w-full"
          />
          <div className="flex gap-2">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              onClick={() => dispatch({ type: "increment" })}
            >
              Increment
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              onClick={() => dispatch({ type: "decrement" })}
            >
              Decrement
            </button>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
              onClick={() => dispatch({ type: "reset" })}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
