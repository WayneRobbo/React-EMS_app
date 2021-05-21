import React, { Component } from 'react';

class ForgotPassword extends Component {

    constructor(props){
        super(props)

        this.state = {
                    }

        this.backButton = this.backButton.bind(this);
    }

    backButton(){
        this.props.history.push("/login");
    }

    render() {
        return (
            <div>
                <h2 style = {{marginTop: "150px"}}>
                    Please contact Human Resource on the following contact details:
                    <div style = {{marginTop: "40px"}}>
                        Phone: 074 : 857588
                    </div>
                    <div style = {{marginTop: "40px"}}>
                        Email: EmployeeServicesHR@gmail.com
                    </div>
                    <button style={{marginTop: "20px"}} onClick={this.backButton} className = "btn btn-success">Return</button>
                </h2>
            </div>
        );
    }
}

export default ForgotPassword;