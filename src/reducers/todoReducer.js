import {ADD_TODO , UPDATE_TODO, DELETE_TODO} from '../constants/action_types'

const TODO_DEFAULT = {
  todos : [
    {
        id: Date.now(),
        text: 'pay eb bill'
    },
    {
        id: Date.now() +10,
        text: 'buy cellphone'
    },
    {
      id: Date.now() +20,
      text: 'buy milk'
  },
  {
    id: Date.now() +40,
    text: 'check for post'
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
        console.log('REDUCERER delete todo.................', action.id)
          const id = action.id
          const todos = state.todos.filter((todo)=>  ( todo.id !== action.id))

          console.log('states===========', todos)

        return {
          ...state,
          todos
        }
      default:
        return state
    }
  }

export default todo;

