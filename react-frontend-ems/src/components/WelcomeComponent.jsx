import { Component } from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

class WelcomeComponent extends Component{

    homePage(){
         this.props.history.push('/employees');
    }
    

    render(){
        return <h1 style = {{marginTop: "20px"}}> Welcome
                    <h3 style = {{marginTop: "20px"}}>{this.props.match.params.name} to EMS application. Click                    
                     <h4>
                        <Link className="nav-link" to="/employees">Link</Link>
                    </h4>
                        To proceed to Main Page 
                    {/* <button className = "btn btn-success" onClick={() => { this.homePage() }} style = {{marginLeft: "10px"}}>Proceed</button> */}
                    </h3>
                </h1>

    }

}

export default WelcomeComponent;