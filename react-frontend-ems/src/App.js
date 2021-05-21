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
import LoginComponent from './components/LoginComponent';
import WelcomeComponent from './components/WelcomeComponent';
import ErrorComponent from './components/ErrorComponent';
import LogoutComponent from './components/LogoutComponent';
import ListShiftComponent from './components/ListShiftComponent';
import AuthenticationService from './components/AuthenticationService.js';
import AuthenticatedRoute from './components/AuthenticatedRoute.jsx';
import CreateShiftComponent from './components/CreateShiftComponent';
import UpdateShiftComponent from './components/UpdateShiftComponent';

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
                  <AuthenticatedRoute path ="/welcome/:name" component={WelcomeComponent}></AuthenticatedRoute>
                  
                  <AuthenticatedRoute path="/employees" component = {ListEmployeeComponent}></AuthenticatedRoute>
                  <AuthenticatedRoute path="/logout" component = {LogoutComponent}></AuthenticatedRoute>
                  <AuthenticatedRoute path="/shifts" component = {ListShiftComponent}></AuthenticatedRoute>
                                    
                  {/* step 1 */}
                  <AuthenticatedRoute path="/add-employee/:id" component = {CreateEmployeeComponent}></AuthenticatedRoute>
                  <AuthenticatedRoute path="/review-employee/:id" component = {ReviewEmployeeComponent}></AuthenticatedRoute>

                  <AuthenticatedRoute path="/add-shifts/:id" component = {CreateShiftComponent}></AuthenticatedRoute>

                  {/* <AuthenticatedRoute path="/update-shift/:id" component = {UpdateShiftComponent}></AuthenticatedRoute> */}

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
