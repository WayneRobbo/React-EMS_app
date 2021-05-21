import React, { Component } from 'react';
import AuthenticationService from'./AuthenticationService.js';
class LoginComponent extends Component{

        constructor(props){
            super(props)
    
            this.state = {
                username: '',
                password: '',
                LoginFailed: false,
                SuccessMessage: false
            }
    
            this.handleChange = this.handleChange.bind(this)
            this.SigninClicked = this.SigninClicked.bind(this)
        }
    
        handleChange(event){
            this.setState({[event.target.name]: event.target.value})
        }
    
        SigninClicked(event){
            //admin,admin
            if(this.state.username==='wayne' && this.state.password==='waynerob'){
                AuthenticationService.registerSuccesfulLogin(this.state.username, this.state.password);
                this.props.history.push(`/welcome/${this.state.username}`)
                console.log('success');

            }else if (this.state.username==='user' && this.state.password==='user'){
                AuthenticationService.registerSuccesfulLogin(this.state.username, this.state.password);
                  this.props.history.push(`/welcome/${this.state.username}`)
         
            }else{
                console.log('failed');
                this.setState({LoginFailed: true})
                this.setState({SuccessMessage: false})
            }
        }
        
        render(){
            return(
                <form>
                    <h2>Employee Log in</h2>
                        
                    {this.state.LoginFailed && <div className="btn btn-danger btn-lg btn-block">Invalid Credentials</div>}
                    {this.state.SuccessMessage && <div>Sign In Successful</div>}
    
                    <div className="card-body">
                        <label>Username</label>
                        <input type="text" name="username" className="form-control" placeholder="Enter Username" 
                        value={this.state.username} onChange={this.handleChange}/>
                    </div>
    
                    <div className="card-body">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" placeholder="Enter Password" 
                        value={this.state.password} onChange={this.handleChange}/>
                    </div>
    
                    <div className="card-body">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />

                            <p className="forgot-password text-center">
                                <h4>
                                    Create new Account <a href="/add-employee/_add">Here</a>
                                </h4>
                            </p>                  

                            <h5>
                                <label className="custom-control-label" htmlFor="customCheck1">Remember Details</label>
                            </h5>
                            
                        </div>
                    </div>
    
                    <button onClick={this.SigninClicked} className="btn btn-success btn-lg btn-block">Sign in</button>
                    <p className="forgot-password text-right">
                        <h5>
                            Forgot <a href="/forgot-password">Password?</a>
                        </h5>    
                    </p>

                </form>
    
                // <div> http://localhost:3000/add-employee/_add
                //     User name: <input type="text" name="username " value={this.state.username} onChange={this.handleChange}/>
                //     Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                //     <button className="btn btn-success">Login</button>
                // </div>
            )
        }
    }
export default LoginComponent;