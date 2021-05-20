import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import AuthenticationService from'./AuthenticationService.js';

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        const username = AuthenticationService.getUsername();
        console.log(isUserLoggedIn);
        console.log(username);
        return (
            <div>
                <header>
                         <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                            <div><a href="/login" className="navbar-brand">Employee Management System</a></div>
                             <ul className="navbar-nav">
                                 {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/:name">Home</Link></li>}
                                 {isUserLoggedIn && <li><Link className="nav-link" to="/employees">Employees</Link></li>}
                                 {isUserLoggedIn && <li><Link className="nav-link" to="/shifts">Shift</Link></li>}
                             </ul>
                             <ul className="navbar-nav navbar-collapse justify-content-end">
                                 {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                                 {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logoutSuccessful}>Logout</Link></li>}
                             </ul>
                         </nav>
                </header>
            </div>
        );
    }
}

export default withRouter(HeaderComponent);