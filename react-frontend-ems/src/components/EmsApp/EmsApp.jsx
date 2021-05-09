import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import ListEmployeeComponent from '../ListEmployeeComponent';
import CreateEmployeeComponent from '../ListEmployeeComponent';
import ReviewEmployeeComponent from '../ListEmployeeComponent';


class EmsApp extends Component{

    render(){
        return(
            <div className = "EmsApp">
                <Router>
                    <>
                        <Switch>
                            {/* <Route path="/" exact component = {LoginComponent}></Route>
                            <Route path ="/login" component={LoginComponent}></Route>
                            <Route path ="/welcome/:name" component={WelcomeComponentAdmin}></Route>
                            <Route path ="/employees" component={ListEmployeeComponent}></Route> */}
                            {/* <Route component={ErrorComponent}></Route> */}
                        </Switch>
                    </>
                </Router>
            </div>
        )
    }
}

// class WelcomeComponentAdmin extends Component{
//     render(){
//          return <h1>Welcome {this.props.match.params.name} to EMS application.  Click link to proceed to Main Page <Link to="/employees">Here</Link>
//          {/* //</h1>return <h1>Welcome {this.props.match.params.name} to EMS application. */}
//          </h1>
//     }
// }

// class WelcomeComponentUser extends Component{
//     render(){
//         return <h1>Welcome User to EMS application</h1>
//     }
// }

function ErrorComponent(){
    return <h2>An Error Occurred! Please contact the following emial address: L00162024@Student.lyit.ie</h2>
}

// class LoginComponent extends Component{
//     constructor(props){
//         super(props)

//         this.state = {
//             username: '',
//             password: '',
//             LoginFailed: false,
//             SuccessMessage: false
//         }

//         this.handleChange = this.handleChange.bind(this)
//         this.SigninClicked = this.SigninClicked.bind(this)
//     }

//     handleChange(event){
//         this.setState({[event.target.name]: event.target.value})
//     }

//     SigninClicked(event){
//         //admin,admin
//         if(this.state.username==='admin' && this.state.password==='admin'){
//             this.props.history.push(`/welcome/${this.state.username}`)
//             console.log('success');
//             // this.setState({SuccessMessage: true})
//             // this.setState({LoginFailed: false})
//         }else if (this.state.username==='user' && this.state.password==='user'){
//              this.props.history.push(`/welcome/${this.state.username}`)
//         }else{
//             console.log('failed');
//             this.setState({LoginFailed: true})
//             this.setState({SuccessMessage: false})
//         }
//     }
    
//     render(){
//         return(
//             <form>
//                 <h2>Employee Log in</h2>
                
//                 {/* <InvalidCredentials LoginFailed={this.state.LoginFailed}/> */}
//                 {/* <SuccessfulLogin SuccessMessage={this.state.SuccessMessage}/> */}

//                 {this.state.LoginFailed && <div>Invalid Credentials</div>}
//                 {this.state.SuccessMessage && <div>Sign In Successful</div>}

//                 <div className="card-body">
//                     <label>Username</label>
//                     <input type="text" name="username" className="form-control" placeholder="Enter Username" 
//                     value={this.state.username} onChange={this.handleChange}/>
//                 </div>

//                 <div className="card-body">
//                     <label>Password</label>
//                     <input type="password" name="password" className="form-control" placeholder="Enter Password" 
//                     value={this.state.password} onChange={this.handleChange}/>
//                 </div>

//                 <div className="card-body">
//                     <div className="custom-control custom-checkbox">
//                         <input type="checkbox" className="custom-control-input" id="customCheck1" />
//                         <label className="custom-control-label" htmlFor="customCheck1">Remember Details</label>
//                     </div>
//                 </div>

//                 <button onClick={this.SigninClicked} className="btn btn-success btn-lg btn-block">Sign in</button>
//                 <p className="forgot-password text-right">
//                     Forgot <a href="ForgotPassword">Password?</a>
//                 </p>
//             </form>

//             // <div>
//             //     User name: <input type="text" name="username " value={this.state.username} onChange={this.handleChange}/>
//             //     Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
//             //     <button className="btn btn-success">Login</button>
//             // </div>
//         )
//     }
// }

// function InvalidCredentials(props){
//     if(props.LoginFailed){
//         return <div>Invalid Credentials</div>
//     }return null
// }

// function SuccessfulLogin(props){
//     if(props.SuccessMessage){
//         return <div>Sign In Successful</div>
//     }return null
// }

export default EmsApp