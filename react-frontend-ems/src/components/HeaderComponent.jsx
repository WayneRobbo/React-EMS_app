import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav style = {{marginBottom: "40px"}}className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className="navbar-brand">Employee Management System</div>
                        <div style = {{marginLeft: "10px"}} className="navbar-brand">Employees</div>
                        <div style = {{marginLeft: "10px"}} className="navbar-brand">Shift</div>
                        <div style = {{marginLeft: "680px"}} className="navbar-brand">Logout</div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;