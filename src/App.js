import React from 'react';
import './App.css';
import Calculator from './Components/calculator';
class App extends React.Component{
    constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Calculator />
    );
  }
}
export default App;
