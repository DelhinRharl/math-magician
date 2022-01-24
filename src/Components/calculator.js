import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.btnClick = this.btnClick.bind(this);
  }

  btnClick(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="container">
        <div className="output">{next || total || 0}</div>
        <div className="btns">
          <button id="ac" type="button" className="btn" onClick={this.btnClick}>AC</button>
          <button id="plusminus" type="button" className="btn" onClick={this.btnClick}>+/-</button>
          <button id="percent" type="button" className="btn" onClick={this.btnClick}>%</button>
          <button id="mod" type="button" className="btn" onClick={this.btnClick}>/</button>
          <button id="seven" type="button" className="btn" onClick={this.btnClick}>7</button>
          <button id="eight" type="button" className="btn" onClick={this.btnClick}>8</button>
          <button id="nine" type="button" className="btn" onClick={this.btnClick}>9</button>
          <button id="multiply" type="button" className="btn" onClick={this.btnClick}>x</button>
          <button id="four" type="button" className="btn" onClick={this.btnClick}>4</button>
          <button id="five" type="button" className="btn" onClick={this.btnClick}>5</button>
          <button id="six" type="button" className="btn" onClick={this.btnClick}>6</button>
          <button id="minus" type="button" className="btn" onClick={this.btnClick}>-</button>
          <button id="one" type="button" className="btn" onClick={this.btnClick}>1</button>
          <button id="two" type="button" className="btn" onClick={this.btnClick}>2</button>
          <button id="three" type="button" className="btn" onClick={this.btnClick}>3</button>
          <button id="plus" type="button" className="btn" onClick={this.btnClick}>+</button>
          <button id="zero" type="button" className="btn" onClick={this.btnClick}>0</button>
          <button id="dot" type="button" className="btn" onClick={this.btnClick}>.</button>
          <button id="equals" type="button" className="btn" onClick={this.btnClick}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
