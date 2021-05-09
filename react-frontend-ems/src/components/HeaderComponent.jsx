import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav style = {{marginBottom: "40px"}}className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className="navbar-brand">Employee Management System</div>
                        <div  style = {{marginLeft: "8px"}} className="navbar-brand">List</div>
                        <div style = {{marginLeft: "800px"}} className="navbar-brand">Logout</div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;