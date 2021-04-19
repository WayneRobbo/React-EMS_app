import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';

class App extends Component {
  render() {
    return (
       <div className="container">
           <ListEmployeeComponent/>
       </div>
    );
  }
}

export default App;
