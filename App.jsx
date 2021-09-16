import "./styles.css";

// I know eval is bad, I do not plan on us
import { useState } from "react";
export default function App() {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);

  const [operand, setOperand] = useState("");

  const getNum = (one, oper, two) => {
    if (!two) return "";
    try {
      return eval(`${one} ${oper} ${two}`);
    } catch (e) {
      return "";
    }
  };
  const addNum = async (num) => {
    if (operand) {
      setNumberTwo(parseInt(numberTwo + "" + num, 10));
    } else {
      setNumberOne(parseInt(numberOne + "" + num, 10));
    }
  };
  return (
    <div>
      <span id="evals">
        {numberOne} {operand} {numberTwo}
        <br />
        {getNum(numberOne, operand, numberTwo)}
      </span>
      <br />
      <div id="calculator">
        <span id="numbers" className="numbers">
          <button onClick={() => addNum(1)}>1</button>
          <button onClick={() => addNum(2)}>2</button>
          <button onClick={() => addNum(3)}>3</button>
          <br />
          <button onClick={() => addNum(4)}>4</button>
          <button onClick={() => addNum(5)}>5</button>
          <button onClick={() => addNum(6)}>6</button>
          <br />
          <button onClick={() => addNum(7)}>7</button>
          <button onClick={() => addNum(8)}>8</button>
          <button onClick={() => addNum(9)}>9</button>
          <br />
        </span>
        <span id="operands" className="operands">
          <button onClick={() => setOperand("+")}>+</button>
          <button onClick={() => setOperand("-")}>-</button>
          <button onClick={() => setOperand("*")}>*</button>
          <br />
          <button onClick={() => setOperand("/")}>&#247;</button>
          <button onClick={() => setOperand("**")}>^</button>
        </span>
      </div>
    </div>
  );
}
