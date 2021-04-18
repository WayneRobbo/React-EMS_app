import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
          EMS
          <FirstComponent></FirstComponent>
      </div>
    );
  }
}

class FirstComponent extends Component {
  render() {
    return (
      <div className="firstComponent">
          First Component
      </div>
    );
  }
}
export default App;