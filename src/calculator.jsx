import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClearButtonClick = () => {
    setInput("");
  };

  const handleEqualsButtonClick = () => {
    try {
        const result = eval(input);
        setHistory([...history, { calculation: input, result: result }]);
        setInput(result);
    } catch (error) {
        setInput('Invalid Operation')
    }
  };

  const handleHistoryButtonClick = () => {
    const historyText = history.map(
      (item) => `${item.calculation} = ${item.result}`
    );
    console.log(historyText);
    setInput(historyText.join());
  };

  return (
    <div className="calculator-container">
      <input type="text" value={input} readOnly />
      <div className="button-row">
        <button onClick={handleClearButtonClick} className="clear">
          C
        </button>
        <button onClick={handleHistoryButtonClick} className="history">
          History
        </button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("/")} className="divide">/</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("*")} className="multiply">*</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("-")} className="minus">-</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={handleEqualsButtonClick} className="equal">
          =
        </button>
        <button onClick={() => handleButtonClick("+")} className="plus">+</button>
      </div>
      
    </div>
  );
}

export default Calculator;
