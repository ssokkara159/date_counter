import React, { useState } from "react";
import "./Body.css";

const Body = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const handleMinusStep = () => {
    setStep(step - 1);
  };
  const handlePlusStep = () => {
    setStep(step + 1);
  };

  const handleMinusCount = () => {
    setCount(count - step);
  };
  const handlePlusCount = () => {
    setCount(count + step);
  };

  const date = new Date("March 12 2024");

  date.setDate(date.getDate() + count);
  const reqDate = date.toDateString();

  return (
    <div>
      <div className="container">
        <div className="steps">
          <button onClick={handleMinusStep}>-</button>
          <span>{step}</span>
          <button onClick={handlePlusStep}>+</button>
        </div>
        <div className="count">
          <button onClick={handleMinusCount}>-</button>
          <span>{count}</span>
          <button onClick={handlePlusCount}>+</button>
        </div>
        <span className="date">
          {count === 0
            ? `Today is `
            : count >= 1
            ? `The date after ${count} days`
            : `The date Ago ${count} days`}
        </span>
        <span>{reqDate}</span>
      </div>
    </div>
  );
};

export default Body;
