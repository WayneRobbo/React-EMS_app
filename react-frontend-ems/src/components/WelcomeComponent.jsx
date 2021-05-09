import { Component } from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import ListEmployeeComponent from "./ListEmployeeComponent";

class WelcomeComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
        }

        this.homePage = this.homePage.bind(this);
    }

    homePage(){
        this.props.history.push("/employees"); 
    }
    

    render(){
        return <h1>Welcome {this.props.match.params.name} to EMS application.  
        {/* Click link to proceed to Main Page <Link to={this.props.history.push(`/employees`)}>Here</Link> */}
            <button className = "btn btn-success" onClick = {this.homePage} style = {{marginLeft: "185px"}}>Proceed</button>
            <button onClick={() => this.homePage()} className ="btn btn-success">Update</button>
        </h1>
   }

}

export default WelcomeComponent;