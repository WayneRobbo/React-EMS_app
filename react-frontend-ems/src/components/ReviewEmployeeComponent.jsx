import React, { Component } from 'react';

class ReviewEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
                id: this.props.match.params.id
        }

    }

    componentDidMount(){
        console.log("testlog");
    }

    render() {
        return (
            
            <div>
                <h2> Review Employee Page </h2>
            </div>
        )
    }
}

export default ReviewEmployeeComponent;