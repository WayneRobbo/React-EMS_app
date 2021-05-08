import React, {Component} from 'react'

class EmsApp extends Component{

    render(){
        return(
            <div className = "EmsApp">
                <LoginComponent/>
            </div>
        )
    }
}

class LoginComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }
    render(){
        return(

            <form>

                <h2>Employee Log in</h2>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter Username" value={this.state.username}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter Passoword" value={this.state.password}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>

            </form>

            // <div>
            //     Username: <input type="text" name="username "/>
            //     Password: <input type="password" name="password" />
            //     <button className="btn btn-success">Login</button>
            // </div>
        )
    }
}

export default EmsApp