import React from 'react'
import { connect } from "react-redux";
import  {addTodo, deleteTodo}  from '../actions/todoAction'

class TodoList extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <ul>
                {
                    this.props.todos.map( todo =>{
                      return (
                      <div>
                         <li key={todo.id}> {todo.text}</li>  
                         <button id= {todo.id} onClick= { (e) => this.handleClick(e, todo.id)}  value={todo.id} >x</button>
                      </div>
                      )
                    })
                }
            </ul>
        )
    }


    handleClick =(e, index)  =>{
        this.props.deleteTodo(index)
    }
}

    // Get state data from store to props
const mapStateToProps = (state) => {
    return {
      ...state.todos_reducer
    };
}

// Get actions to handle store data
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => dispatch(addTodo(todo)),
        deleteTodo : (id) =>  dispatch(deleteTodo(id))
    };
}

// Wire it all up and export
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);