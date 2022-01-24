import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({});

  const btnClick = (e) => {
    setState(calculate(state, e.target.textContent));
  };

  const { next, total } = state;
  return (
    <div className="g-container">
      <p>Lets do some math</p>
      <div className="container">
        <div className="output">{next || total || 0}</div>
        <div className="btns">
          <button id="ac" type="button" className="btn" onClick={btnClick}>AC</button>
          <button id="plusminus" type="button" className="btn" onClick={btnClick}>+/-</button>
          <button id="percent" type="button" className="btn" onClick={btnClick}>%</button>
          <button id="mod" type="button" className="btn" onClick={btnClick}>/</button>
          <button id="seven" type="button" className="btn" onClick={btnClick}>7</button>
          <button id="eight" type="button" className="btn" onClick={btnClick}>8</button>
          <button id="nine" type="button" className="btn" onClick={btnClick}>9</button>
          <button id="multiply" type="button" className="btn" onClick={btnClick}>x</button>
          <button id="four" type="button" className="btn" onClick={btnClick}>4</button>
          <button id="five" type="button" className="btn" onClick={btnClick}>5</button>
          <button id="six" type="button" className="btn" onClick={btnClick}>6</button>
          <button id="minus" type="button" className="btn" onClick={btnClick}>-</button>
          <button id="one" type="button" className="btn" onClick={btnClick}>1</button>
          <button id="two" type="button" className="btn" onClick={btnClick}>2</button>
          <button id="three" type="button" className="btn" onClick={btnClick}>3</button>
          <button id="plus" type="button" className="btn" onClick={btnClick}>+</button>
          <button id="zero" type="button" className="btn" onClick={btnClick}>0</button>
          <button id="dot" type="button" className="btn" onClick={btnClick}>.</button>
          <button id="equals" type="button" className="btn" onClick={btnClick}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
