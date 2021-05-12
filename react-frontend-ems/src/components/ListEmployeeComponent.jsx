import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
                employees:[]
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.reviewEmployee = this.reviewEmployee.bind(this);
    }

    componentDidMount(){
        console.log("Test0");
        EmployeeService.getEmployees().then((response)=>{
            this.setState({employees:response.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    updateEmployee(id){
        // this.props.history.push(`/update-employee/${id}`);
        this.props.history.push(`/add-employee/${id}`);
    }

    deleteEmployee(id){
        //rest api call to delete employee by ID
        EmployeeService.deleteEmployee(id).then((response) => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
        this.props.history.push(`/employees`);
    }
    
    reviewEmployee(id){
        // this.props.history.push(`/review-employee/${id}`);  
        this.props.history.push(`/review-employee/${id}`); 
    }
        
    render() {
        return (
            <div>
                <h2 style = {{marginTop: "20px"}} className="text-center">Employees List</h2>
                    <div className = "row">
                            <table style = {{marginTop: "20px"}} className = "table table-striped tabled-bordered">
                                <thead>
                                    <tr>
                                        <th>Employee First ame</th>
                                        <th>Employee Last Name</th>
                                        <th>Employee Email Id</th>
                                        <th className = "text-bold">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.employees.map(
                                            employee =>
                                            <tr key= {employee.id}>
                                                <td>{employee.firstName}</td>
                                                <td>{employee.lastName}</td>
                                                <td>{employee.emailId}</td>
                                                <td>
                                                    <button onClick={() => this.updateEmployee(employee.id)} className ="btn btn-success">Update</button>
                                                    <button style = {{marginLeft: "15px"}} onClick={() => this.deleteEmployee(employee.id)} className ="btn btn-danger">Delete</button>
                                                    <button style = {{marginLeft: "15px"}} onClick={() => this.reviewEmployee(employee.id)} className ="btn btn-info">Review</button>
                                                </td>
                                            </tr>   
                                        )
                                    }
                                </tbody>
                            </table>
                            <button className ="btn btn-primary" style = {{marginLeft: "893px"}} onClick={this.addEmployee}>Add Employee</button>
                    </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;