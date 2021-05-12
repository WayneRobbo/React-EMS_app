import React, { Component } from 'react';

class LogoutComponent extends Component{

    constructor(props){
        super(props)

        this.state = {               
        }
    }
    render(){
        return <h1 style = {{marginTop: "60px"}} className="text-center">
                You Are Logged out.
                    <h3 style = {{marginTop: "30px"}} className="text-center">
                        Thank You for Using My Application.
                    </h3>
                </h1>
    }
}
export default LogoutComponent;