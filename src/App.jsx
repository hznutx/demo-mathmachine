import React, { useState } from "react";
import "./style.css";


const buttonStyle = {
  width: "80px",
  height: "80px",
  borderRadius: "10px",
  backgroundColor: "#97BFB4",
  color: "#FFF",
  border: "none",
  margin: "8px",
  fontSize: "28px",
  fontwidth: "700",
};

const App = () => {
  const [input, setInput] = useState(0);
  const [operation, setOperation] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleOperation = (op) => {
    setOperation(op);
    setPreviousValue(Number(input));
    setInput("");
    console.log(op);
  };

  const handleClear = () => {
    setInput("");
    setOperation(null);
    setPreviousValue(null);
  };
  const handleCalculate = () => {
    const currentValue = Number(input);
    let result;

    switch (operation) {
      case "+":
        result = previousValue + currentValue;
        break;
      case "-":
        result = previousValue - currentValue;
        break;
      case "*":
        result = previousValue * currentValue;
        break;
      case "/":
        result = previousValue / currentValue;
        break;
      case "%":
        result = previousValue * (currentValue / 100);
        break;
      default:
        result = currentValue;
    }

    setInput(result);
    setOperation(null);
    setPreviousValue(null);
    console.log(result);
  };

  // function displayNumber() {
  //   const number = input.toString().split(".");
  //   if (number.length > 1) {
  //     return `${number[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.${number[1]}`;
  //   } else {
  //     return `${number[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  //   }
  // }

  const onClickNumber = (number) => {
    console.log(number);
    if (number != ".") {
      setInput((prev) => (!prev ? `${number}` : `${prev}${number}`));
    } else {
      if (input.indexOf(".") == -1) {
        setInput(`${input}${number}`);
      }
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "450px",
          height: "500px",
          backgroundColor: "#E4E4E2",
          padding: 50,
          borderRadius: "30px",
          textAlign: "center",
        }}
      >
        <input
          readOnly
          value={input.toLocaleString()}
          onChange={handleInput}
          style={{
            textAlign: "right",
            width: "445px",
            height: "60px",
            fontSize: "36px",
            borderRadius: "10px",
            border: "none",
            marginBottom: "20px",
            color: "#4F091D",
          }}
        />
        <br />
        <button style={buttonStyle} onClick={() => onClickNumber(7)}>
          7
        </button>
        <button style={buttonStyle} onClick={() => onClickNumber(8)}>
          8
        </button>
        <button style={buttonStyle} onClick={() => onClickNumber(9)}>
          9
        </button>
        <button style={buttonStyle} onClick={() => handleOperation("%")}>
          %
        </button>
        <button
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "10px",
            backgroundColor: "#DD4A48",
            color: "#FFF",
            border: "none",
            margin: "8px",
            fontSize: "28px",
            fontwidth: "700",
          }}
          onClick={handleClear}
        >
          c
        </button>
        <br />
        <button style={buttonStyle} onClick={() => onClickNumber(4)}>
          4
        </button>
        <button style={buttonStyle} onClick={() => onClickNumber(5)}>
          5
        </button>
        <button style={buttonStyle} onClick={() => onClickNumber(6)}>
          6
        </button>
        <button style={buttonStyle} onClick={() => handleOperation("*")}>
          x
        </button>
        <button style={buttonStyle} onClick={() => handleOperation("/")}>
          /
        </button>
        <br />
        <button style={buttonStyle} onClick={() => onClickNumber(1)}>
          1
        </button>
        <button style={buttonStyle} onClick={() => onClickNumber(2)}>
          2
        </button>
        <button style={buttonStyle} onClick={() => onClickNumber(3)}>
          3
        </button>
        <button style={buttonStyle} onClick={() => handleOperation("-")}>
          -
        </button>
        <button style={buttonStyle} onClick={() => handleOperation("+")}>
          +
        </button>
        <br />
        <button
          style={{
            width: "260px",
            height: "80px",
            borderRadius: "10px",
            backgroundColor: "#97BFB4",
            color: "#FFF",
            border: "none",
            margin: "5px",
            fontSize: "28px",
            fontwidth: "700",
          }}
          onClick={() => onClickNumber(0)}
        >
          0
        </button>
        <button style={buttonStyle} onClick={() => onClickNumber(".")}>
          .
        </button>
        <button style={buttonStyle} onClick={handleCalculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default App;

