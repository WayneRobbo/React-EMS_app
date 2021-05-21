import React, {Component} from 'react'
// import TodoService from './TodoService.js';
import AuthenticationService from './AuthenticationService.js';
import moment from 'moment'
import ShiftService from '../services/ShiftService.js';

class ListShiftComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
                shifts: []              
        }

        this.addShift = this.addShift.bind(this);
        this.updateShift = this.updateShift.bind(this);
        this.deleteShift = this.deleteShift.bind(this);
        this.reviewShift = this.reviewShift.bind(this);
    }

    updateShift(id){
        this.props.history.push(`/add-shifts/${id}`);
    }

    componentDidMount() {
        ShiftService.getShifts()
          .then(
              response => {
                  this.setState({shifts : response.data})
              }
         )
    }
    deleteShift(id){
        //rest api call to delete employee by ID
        ShiftService.deleteShift(id).then((response) => {
            this.setState({shifts: this.state.shifts.filter(shift => shift.id !== id)});
        });
        this.props.history.push('/shifts');
    }

    addShift(){
        this.props.history.push('/add-shifts/_add');
    }

    reviewShift(id){
        // this.props.history.push(`/review-employee/${id}`);  
        this.props.history.push(`/review-shifts/${id}`); 
    }
      

    render(){
        return(
            <div>
                 <h2 style = {{marginTop: "20px"}} className="text-center">Employee Shift List</h2>

                 <div className = "row">
                            <table className = "table table-striped tabled-bordered">
                                
                                <thead>
                                    <tr>
                                        <th>Employee First Name</th>
                                        <th>Employee Last Name</th>
                                        <th>Employee Email Id</th>
                                        <th>Shift Date</th>
                                        <th>Actions</th>
                                    </tr>

                                </thead>

                                <tbody>
                                    {
                                        this.state.shifts.map(
                                            shift => 
                                            <tr key = {shift.id}>
                                                <td>{shift.firstName}</td>
                                                <td>{shift.secondName}</td>
                                                <td>{shift.email}</td>
                                                <td>{shift.shiftDate}</td>
                                                <button onClick={() => this.updateShift(shift.id)} className ="btn btn-success">Update</button>
                                                    <button style = {{marginLeft: "15px"}} onClick={() => this.deleteShift(shift.id)} className ="btn btn-danger">Delete</button>
                                                    <button style = {{marginLeft: "15px"}} onClick={() => this.reviewShift(shift.id)} className ="btn btn-info">Review</button> 
                                                {/* <td>{moment(shift.targetDate).format('DD MM YYYY')}</td> */}
                                            </tr>
                                        )
                                    }
                                </tbody>

                            </table>      
                            <div className = "row">
                                <button className = "btn btn-primary" style = {{marginLeft: "950px"}} onClick={this.addShift}>Add New Shift</button>
                            </div>  
                    </div>
            </div>
        )
    }
}

export default ListShiftComponent

    // constructor(props){
    //     console.log('constructor')
    //     super(props)
    //     this.state = {
    //         todos : [],
    //         message : null
    //     }
    //     this.deleteTodoClicked = this.deleteTodoClicked.bind(this)   
    //     this.updateTodoClicked = this.updateTodoClicked.bind(this)   
    //     this.addTodoClicked = this.addTodoClicked.bind(this)
    //     this.refreshTodos = this.refreshTodos.bind(this)
    // }

    // componentWillUnmount() {
    //     console.log('componentWillUnmount')
    // }
    
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('shouldComponentUpdate')
    //     console.log(nextProps)
    //     console.log(nextState)
    //     return true
    // }

    // componentDidMount() {
    //     console.log('componentDidMount')
    //     this.refreshTodos();
    //     console.log(this.state)
    // }

    // refreshTodos() {
    //     // let username = AuthenticationService.isUserLoggedIn()
    //     // TodoService.retrieveAllTodos(username)
    //     //   .then(
    //     //       response => {
    //     //           //console.log(response);
    //     //           this.setState({todos : response.data})
    //     //       }
    //     //  ) 
    // }

    // deleteTodoClicked(id) {
    //     // let username = AuthenticationService.isUserLoggedIn()

    //     // TodoService.deleteTodo(username, id)
    //     //  .then (
    //     //      response => {
    //     //         this.setState({message : `Delete of todo ${id} Successful`})
    //     //         this.refreshTodos()
    //     //      }
    //     //  )
        
    // }

    // addTodoClicked() {
    //     this.props.history.push(`/todos/-1`)
    // }

    // updateTodoClicked(id) {
    //     console.log('update ' + id)
    //     this.props.history.push(`/todos/${id}`)

    // }

    // render() {
    //     console.log('render')
    //     return (
    //         <div>
    //              <h1>List Todos</h1>
    //              {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
    //              <div className="container">
    //                 <table className="table">
    //                     <thead>
    //                         <tr>
    //                             <th>Description</th>
    //                             <th>Target Date</th>
    //                             <th>IsCompleted?</th>
    //                             <th>Update</th>
    //                             <th>Delete</th>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                     {
    //                         this.state.todos.map (
    //                             todo =>
    //                                 <tr key={todo.id}>
    //                                     <td>{todo.description}</td>
    //                                     <td>{todo.done.toString()}</td>
    //                                     <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
    //                                     <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
    //                                     <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
    //                                 </tr>
    //                         )
    //                         }
    //                     </tbody>
    //                 </table>
    //                 <div className="row">
    //                     <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
    //                 </div>
    //              </div>
    //         </div>
    //     )
    // }