import React, { Component } from 'react';

class CreateEmployeeComponent extends Component {
    
    constructor(props){
        super(props)

        this.state = {

            firstName:'',
            lastName:'',
            emailId:''                
        }

        this.saveEmployee = this.saveEmployee.bind(this);
        this.cancel = this.cancel.bind(this);
        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changeEmailId = this.changeEmailId.bind(this);
    }

    saveEmployee = (e) => {
        e.preventDefault();

        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee => ' + JSON.stringify(employee));
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
                <h1 className = "text-center" style = {{marginBottom: "100px"}}>Employee Form</h1>
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className = "text-center">Add Employee</h3>
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

                                        <button className = "btn btn-success"  onClick = {this.saveEmployee} style = {{marginLeft: "185px"}}>Save</button>
                                        <button className = "btn btn-danger" onClick = {this.cancel} style = {{marginLeft: "2px"}}>Cancel</button>
                                    </form>
                                </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;