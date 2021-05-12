import { Component } from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

class WelcomeComponent extends Component{

    homePage(){
         this.props.history.push('/employees');
    }
    

    render(){
        return <h2 style = {{marginTop: "60px"}} className="text-center">Welcome {this.props.match.params.name} to EMS application. Click proceed button to Main Page 
                    <button className = "btn btn-success" onClick={() => { this.homePage() }} style = {{marginLeft: "10px"}}>Proceed</button>
                </h2>
    }

}

export default WelcomeComponent;