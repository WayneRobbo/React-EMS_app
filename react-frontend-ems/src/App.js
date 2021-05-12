import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ReviewEmployeeComponent from './components/ReviewEmployeeComponent';
import EmsApp from './components/EmsApp/EmsApp';
import LoginComponent from './components/LoginComponent';
import WelcomeComponent from './components/WelcomeComponent';
import ErrorComponent from './components/ErrorComponent';
import LogoutComponent from './components/LogoutComponent';
import ListShiftComponent from './components/ListShiftComponent';

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <Router>
            <HeaderComponent/>
              <div className="container">
                <Switch> 
                  <Route path="/" exact component = {LoginComponent}></Route>

                  <Route path ="/login" component={LoginComponent}></Route>
                  <Route path ="/welcome/:name" component={WelcomeComponent}></Route>
                  
                  <Route path="/employees" component = {ListEmployeeComponent}></Route>
                  <Route path="/logout" component = {LogoutComponent}></Route>
                  <Route path="/shift" component = {ListShiftComponent}></Route>
                                    
                  {/* step 1 */}
                  <Route path="/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                  <Route path="/review-employee/:id" component = {ReviewEmployeeComponent}></Route>

                  <Route component={ErrorComponent}></Route> 
                  {/* <Route path="/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                </Switch>
              </div>
            <FooterComponent /> 
        </Router>   
      </div>  
    );
  }
}

export default App;
