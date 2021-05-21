import React, { Component } from 'react';
import ShiftService from '../services/ShiftService.js';

class ReviewShiftComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
                id: this.props.match.params.id,
                shift: {}
        }

        this.backButton = this.backButton.bind(this);
    }

    componentDidMount(){
        ShiftService.getShiftById(this.state.id).then(response =>{
            this.setState({shift: response.data});
        });
    }

    backButton(){
        this.props.history.push("/shifts");
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
                            <div> { this.state.shift.firstName }</div>
                        </div>
                        <div className = "row">
                            <th style={{paddingRight: "8px"}}> Employee Last Name:  </th>
                            <div> { this.state.shift.secondName }</div>
                        </div>
                        <div className = "row">
                            <th style={{paddingRight: "8px"}}> Employee Email Id:  </th>
                            <div> { this.state.shift.email }</div>
                        </div>
                        <div className = "row">
                            <th style={{paddingRight: "8px"}}> Employee Shift Date:  </th>
                            <div> { this.state.shift.shiftDate }</div>
                        </div>
                        <button style={{marginLeft: "440px"}} onClick={this.backButton} className = "btn btn-info">Back</button>
                    </div> 
                </div>
            </div>
        )
    }
}

export default ReviewShiftComponent;