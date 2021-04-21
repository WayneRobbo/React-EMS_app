import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ReviewEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
                id: this.props.match.params.id,
                employee: {}
        }

        this.backButton = this.backButton.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then(response =>{
            this.setState({employee: response.data});
        });
    }

    backButton(){
        this.props.history.push("/employees");
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Review Employee Details </h3>
                    <div className = "card-body">
                        <div className = "row">
                            <th style={{paddingRight: "8px"}}> Employee First Name:  </th>
                            <div> { this.state.employee.firstName }</div>
                        </div>
                        <div className = "row">
                            <th style={{paddingRight: "8px"}}> Employee Last Name:  </th>
                            <div> { this.state.employee.lastName }</div>
                        </div>
                        <div className = "row">
                            <th style={{paddingRight: "8px"}}> Employee Email Id:  </th>
                            <div> { this.state.employee.emailId }</div>
                        </div>
                        <button style={{marginLeft: "440px"}} onClick={this.backButton} className = "btn btn-info">Back</button>
                    </div> 
                </div>
            </div>
        )
    }
}

export default ReviewEmployeeComponent;