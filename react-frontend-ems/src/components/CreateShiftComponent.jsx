import React, { Component } from 'react';
import ShiftService from '../services/ShiftService';

class CreateShiftComponent extends Component {

    constructor(props){
        super(props)

        this.state = {   
            firstName:'',
            secondName:'',
            email:'',
            shiftDate:''
        }

        this.saveShift = this.saveShift.bind(this);
        this.cancel = this.cancel.bind(this);
        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changeEmailId = this.changeEmailId.bind(this);
        this.changeDate = this.changeDate.bind(this);
    }

    changeFirstName =(event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastName = (event) =>{
        this.setState({secondName: event.target.value});
    }

    changeEmailId = (event) =>{
        this.setState({email: event.target.value});
    }

    changeDate = (event) =>{
        this.setState({shiftDate: event.target.value});
    }

    saveShift = (e) =>{
        e.preventDefault();
        let shift = {firstName: this.state.firstName, secondName: this.state.secondName, email: this.state.email, shiftDate: this.state.shiftDate};
        console.log('shift => ' + JSON.stringify(shift));

        ShiftService.createShift(shift).then(res =>{
            this.props.history.push('/shifts');
        });

        // //step 5
        // if(this.state.id === "_add"){
        //     //Add new employee operation
        //     EmployeeService.createEmployee(employee).then(response =>{
        //         this.props.history.push('/employees');
        //     });
        // }else{
        //     //Update existed employee by Id
        //     EmployeeService.updateEmployee(employee, this.state.id).then( response => {
        //         this.props.history.push('/employees');
        //     });
        // }
    }

    cancel(){
        this.props.history.push('/shifts');

    }

    // getButton(){
    //     if(this.state.id === "_add"){
    //        return <button className = "btn btn-success"  onClick = {this.saveEmployee} style = {{marginLeft: "115px"}}>Save</button>
    //     }else{
    //        return <button className = "btn btn-success" onClick = {this.saveEmployee} style = {{marginLeft: "115px"}}>Update</button>
    //     }
    // }


    render() {
        return (
            <div>
                <h1>Shift Form</h1>
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className = "text-center" style = {{marginBottom: "50px"}}> Add Shift </h3>
                        <div className = "card-body"></div>
                        <form>
                            <div className = "form-group">
                                <th> First Name: </th>
                                <input placeholder = "First Name" name = "firstName" className = "form-control"
                                    value={this.state.firstName} onChange={this.changeFirstName}/>
                            
                                <th> Last Name: </th>
                                <input placeholder = "Last Name" name = "lastName" className = "form-control"
                                    value={this.state.secondName} onChange={this.changeLastName}/>

                                <th> Email </th>
                                <input placeholder = "Email Id" name = "emailId" className = "form-control"
                                    value={this.state.email} onChange={this.changeEmailId}/>

                                <th> Date </th>
                                <input placeholder = "Shift Date" name = "date" className = "form-control"
                                    value={this.state.shiftDate} onChange={this.changeDate}/>
                            </div>
                            {/* {
                                    this.getButton()
                            } */}
                            <button className = "btn btn-success"  onClick = {this.saveShift} style = {{marginLeft: "55px"}}>Save</button>
                            <button className = "btn btn-danger" onClick = {this.cancel} style = {{marginLeft: "2px"}}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateShiftComponent;