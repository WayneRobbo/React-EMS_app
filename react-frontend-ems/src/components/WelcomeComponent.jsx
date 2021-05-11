import { Component } from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import App from "../App";

import ListEmployeeComponent from "./ListEmployeeComponent";

class WelcomeComponent extends Component{

    homePage(){
         console.log("test print");
         this.props.history.push('/employees');
    }
    

    render(){
        return <div>Welcome {this.props.match.params.name} to EMS application.  
        <button className = "btn btn-success" onClick={() => { this.homePage() }} style = {{marginLeft: "185px"}}>Proceed</button>

        {/* Click link to proceed to Main Page <Link to={this.props.history.push(`/employees`)}>Here</Link> */}
            {/* <button className = "btn btn-success" onClick={() => { this.homePage() }} style = {{marginLeft: "185px"}}>Proceed</button> */}
            {/* <button onClick={() => this.homePage()} className ="btn btn-success">Update</button> */}
        </div>
   }

}

export default WelcomeComponent;