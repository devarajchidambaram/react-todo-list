import React from 'react'
import { connect } from "react-redux";
import  {addTodo, deleteTodo}  from '../actions/todoAction'
import TodoList from './todoList'

class Todo extends React.Component {
    constructor(props){
        super(props)
    }

    render(){

        return (
            <div>
                <h3>Todo list</h3>         
                <TodoList  todos={this.props.todos} />

                    <input
                     onKeyUp = {this.handleSubmit}
                        placeholder= 'Add some task...'
                    />
                    <button >
                         Add #{this.props.todos.length + 1}
                    </button>
            </div>
        )
    }

    handleChange = e =>{
        // this.setState({
        //     text : e.target.value
        // })
    }

    handleSubmit = (e) =>{
       //# improve me
        //This is not the efficent way
        e.preventDefault();

        if(e.key !== 'Enter') return

        const todo ={
            id: Date.now(),
            text: e.target.value
        }

        this.props.addTodo(todo)
        e.target.value = ''
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
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
