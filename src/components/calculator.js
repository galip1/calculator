import React from "react";
import { useState } from "react";
import { TbSquareRoot } from "react-icons/tb";
import "./calculator.css";
const Calculator = () => {
  const [calculation, setCalculation] = useState("");

  const handleButtonClick = (value) => {
    setCalculation(calculation + value);
  };
  const handleInputChange = (event) => {
    setCalculation(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Backspace") {
      setCalculation(calculation.slice(0, -1));
    }
    if (event.key === "Enter") {
      calculate();
    }
  };
  const calculate = () => {
    try {
      let result = eval(calculation);
      if (result < 0) {
        setCalculation("error");
        return;
      }
      result = Math.sqrt(result);
      setCalculation(result.toString());
    } catch (error) {
      setCalculation("error");
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input
        type="text"
        value={calculation}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <div className="button-row">
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => setCalculation("")}>C</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
      </div>
      <div className="button-row">
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
