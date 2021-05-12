import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                         <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                            <div><a href="/login" className="navbar-brand">Employee Management System</a></div>
                             <ul className="navbar-nav">
                                 <li><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>
                                 <li><Link className="nav-link" to="/employees">Employees</Link></li>
                                 <li><Link className="nav-link" to="/shift">Shift</Link></li>
                             </ul>
                             <ul className="navbar-nav navbar-collapse justify-content-end">
                                 <li><Link className="nav-link" to="/login">Login</Link></li>
                                 <li><Link className="nav-link" to="/logout">Logout</Link></li>
                             </ul>
                         </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;