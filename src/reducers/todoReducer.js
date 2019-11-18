import {ADD_TODO , UPDATE_TODO, DELETE_TODO} from '../constants/action_types'

const TODO_DEFAULT = {
  todos : [
    {
        id: Date.now(),
        text: 'pay eb bill'
    },
    {
        id: Date.now() +1,
        text: 'buy cellphone'
    }
],
text : ''

}


/*
todos.filter((todo.id)=> t)
*/

function todo(state = TODO_DEFAULT, action) {
    switch (action.type) {
      case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos , action.todo]
            }
      case UPDATE_TODO:
        return state
      case DELETE_TODO:
        return state
      default:
        return state
    }
  }

export default todo;

