import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
     
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName:'',
            lastName:'',
            emailId:''                
        }

        this.updateEmployee = this.updateEmployee.bind(this);
        this.cancel = this.cancel.bind(this);
        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changeEmailId = this.changeEmailId.bind(this);
    }

    updateEmployee = (e) => {
        e.preventDefault();
    
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee => ' + JSON.stringify(employee));
        
         //console.log('employee => ' + JSON.stringify(employee));
         //console.log('id => ' + JSON.stringify(this.state.id));
    
         EmployeeService.updateEmployee(employee, this.state.id).then( response => {
             this.props.history.push('/employees');

         });
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((response)=>{
            let employee = response.data;
            this.setState({firstName: employee.firstName, lastName: employee.lastName, emailId: employee.emailId});
        });
    }

    cancel(){
        this.props.history.push('/employees');
    }

    changeFirstName = (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastName = (event) =>{
        this.setState({lastName: event.target.value});
    }

    changeEmailId = (event) =>{
        this.setState({emailId: event.target.value});
    }

    render() {
        return (
            <div>
                <h1 className = "text-center" style = {{marginBottom: "100px"}}>Employee Update</h1>
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className = "text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder = "First Name" name = "firstName" className = "form-control"
                                                value={this.state.firstName} onChange={this.changeFirstName}/>
                                        
                                            <label> Last Name: </label>
                                            <input placeholder = "Last Name" name = "lastName" className = "form-control"
                                                value={this.state.lastName} onChange={this.changeLastName}/>

                                            <label> Email Id </label>
                                            <input placeholder = "Email Id" name = "emailId" className = "form-control"
                                                value={this.state.emailId} onChange={this.changeEmailId}/>
                                        </div>
                                        <button className = "btn btn-success" onClick = {this.updateEmployee} style = {{marginLeft: "185px"}}>Update</button>
                                        <button className = "btn btn-danger" onClick = {this.cancel} style = {{marginLeft: "2px"}}>Cancel</button>
                                    </form>
                                </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default UpdateEmployeeComponent;