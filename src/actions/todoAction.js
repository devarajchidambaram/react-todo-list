import { ADD_TODO, DELETE_TODO} from '../constants/action_types'

// Action to add article to store
 export  const addTodo = todo => ({
    type: ADD_TODO,
     todo
});

export  const deleteTodo = id => ({
    type: DELETE_TODO,
    id
});

