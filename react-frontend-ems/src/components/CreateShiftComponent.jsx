import React, { Component } from 'react';
import emailjs from "emailjs-com";
import ShiftService from '../services/ShiftService';

class CreateShiftComponent extends Component {


    constructor(props){
        super(props)

        this.state = {   
            id: this.props.match.params.id,
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

    componentDidMount(){

        if(this.state.id=== '_add'){
            return
        }else{
            ShiftService.getShiftById(this.state.id).then( (response) =>{
                let shift = response.data;
                this.setState({firstName: shift.firstName, secondName: shift.secondName, email: shift.email, shiftDate: shift.shiftDate});
    
            })
        }
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

        if(this.state.id == '_add'){
            ShiftService.createShift(shift).then(res =>{
                this.props.history.push('/shifts');
                console.log("test shift");
            });
        }else{
            ShiftService.updateShift(shift, this.state.id).then( response => {
                this.props.history.push('/shifts');
    
            });
        }
    }


    cancel(){
        this.props.history.push('/shifts');
    }

    getTitle(){

        if(this.state.id === '_add'){
            return <h1 className = "text-center" style = {{marginBottom: "50px"}}>Shift Form</h1>
        }else{
            return <h1 className = "text-center" style = {{marginBottom: "50px"}}>Shift Update</h1>
        }
    }

    getSubTitle(){
        if(this.state.id === '_add'){
            return <h3 className = "text-center">Add New Shift</h3>
        }else{
            return <h3 className = "text-center">Update Shift</h3>
        }
    }

    getButton(){
        if(this.state.id === '_add'){
           return <button className = "btn btn-success" type="submit" onClick = {this.saveShift} style = {{marginLeft: "35px"}}>Create</button>
        }else{
           return <button className = "btn btn-success" onClick = {this.saveShift} style = {{marginLeft: "25px"}}>Update</button>
        }
    }


    render() {
        return (
            <div>
                {
                    this.getTitle()
                }
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        {
                            this.getSubTitle()
                        }
                        {/* <div className = "card-body"></div> */}
                        <form className="contact-form" onSubmit={sendEmail}>
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
                                    {
                                        this.getButton()
                                    }
                            {/* <button className = "btn btn-success"  onClick = {this.saveShift} style = {{marginLeft: "55px"}}>Save</button> */}
                            <button className = "btn btn-danger" onClick = {this.cancel} style = {{marginLeft: "4px"}}>Cancel</button>
                            {/* <button type="submit" onClick={sendEmail}> send</button> */}
                            <input className = "btn btn-info" style = {{marginLeft: "4px"}} type="submit" value="Send Notification"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateShiftComponent;
    

    function sendEmail(e) {
        console.log("test email");
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_y81omic', e.target, 'user_ymWC16QG0r318Q0EBpdGS')
          .then((result) => {
              console.log(result.text);
              console.log("email");
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
