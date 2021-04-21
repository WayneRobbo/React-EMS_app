import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ReviewEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
                id: this.props.match.params.id,
                employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then(response =>{
            this.setState({employee: response.data});
        });
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Review Employee Details </h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee First Name:  </label>
                            <div> { this.state.employee.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Last Name:  </label>
                            <div> { this.state.employee.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Email Id:  </label>
                            <div> { this.state.employee.emailId }</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewEmployeeComponent;