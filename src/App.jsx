import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };
  const handleClear = () => {
    setInput("");
  };
  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calc-container">
      <div className="output-section">{input || "0"}</div>

      <div className="input-section">
        <button className="controls" onClick={handleClear}>
          AC
        </button>
        <button className="controls" onClick={handleDelete}>
          DEL
        </button>
        <button
          className="operator"
          onClick={() => {
            handleClick("%");
          }}
        >
          %
        </button>
        <button
          className="operator"
          onClick={() => {
            handleClick("/");
          }}
        >
          ÷
        </button>

        <button
          className="btns"
          onClick={() => {
            handleClick("7");
          }}
        >
          7
        </button>
        <button
          className="btns"
          onClick={() => {
            handleClick("8");
          }}
        >
          8
        </button>
        <button
          className="btns"
          onClick={() => {
            handleClick("9");
          }}
        >
          9
        </button>
        <button
          className="operator"
          onClick={() => {
            handleClick("*");
          }}
        >
          x
        </button>

        <button
          className="btns"
          onClick={() => {
            handleClick("4");
          }}
        >
          4
        </button>
        <button
          className="btns"
          onClick={() => {
            handleClick("5");
          }}
        >
          5
        </button>
        <button
          className="btns"
          onClick={() => {
            handleClick("6");
          }}
        >
          6
        </button>
        <button
          className="operator"
          onClick={() => {
            handleClick("+");
          }}
        >
          +
        </button>

        <button
          className="btns"
          onClick={() => {
            handleClick("1");
          }}
        >
          1
        </button>
        <button
          className="btns"
          onClick={() => {
            handleClick("2");
          }}
        >
          2
        </button>
        <button
          className="btns"
          onClick={() => {
            handleClick("3");
          }}
        >
          3
        </button>
        <button
          className="operator"
          onClick={() => {
            handleClick("-");
          }}
        >
          -
        </button>

        <button
          className="btns"
          onClick={() => {
            handleClick("0");
          }}
        >
          0
        </button>
        <button
          className="btns"
          onClick={() => {
            handleClick(".");
          }}
        >
          .
        </button>
        <button className="evaluate" onClick={handleCalculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
