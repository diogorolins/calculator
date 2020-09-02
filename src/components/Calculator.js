import React, { useState } from "react";
import Display from "./Display";
import DisplayOperation from "./DisplayOperation";
import Keys from "./Keys";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [displayOperation, setDisplayOperation] = useState("");
  const [operationValues, setOperationValues] = useState("");

  const clearDisplay = (key) => {
    setDisplay("0");
    setDisplayOperation("");
    setOperationValues("");
  };

  const fillDisplayAndDot = (value, key) => {
    if (key === "." && display.split("").includes(".")) {
      return value;
    }
    return (value += key);
  };

  const clearZeroAsFirst = (value) => {
    if (value.substring(0, 1) !== "0") {
      return value;
    }
    return value.substring(1, value.length);
  };

  const addKeyToDisplay = (key) => {
    let displayValue = display;

    if (display.length < 8) {
      displayValue = fillDisplayAndDot(displayValue, key);
      displayValue = clearZeroAsFirst(displayValue);
    }

    setDisplay(displayValue);
  };

  const doOperation = (key) => {
    if (display > 0) {
      setDisplayOperation(key);
      setOperationValues({ first: display });
      setDisplay("");
    }
  };

  const getResult = () => {
    setOperationValues({ ...operationValues, second: display });
    setDisplay(eval(`${operationValues.first}${displayOperation}${display}`));
  };

  const actions = {
    clear: clearDisplay,
    key: addKeyToDisplay,
    oper: doOperation,
    equal: getResult,
  };

  const action = (key) => {
    actions[key.type](key.key);
  };

  return (
    <section className="principal">
      <div className="calculator">
        <div className="displayOperation">
          <DisplayOperation
            operation={displayOperation}
            values={operationValues}
          />
        </div>
        <div className="display">
          <Display value={display} />
        </div>
        <div className="keys">
          <Keys action={action} />
        </div>
      </div>
    </section>
  );
};

export default Calculator;
