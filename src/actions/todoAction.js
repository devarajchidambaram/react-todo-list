 import { TodoConstants} from '../constants'

// Action to add article to store
 export  const addTodo = todo => ({
    type: TodoConstants.ADD_TODO,
     todo
});

export  const deleteTodo = id => ({
    type: TodoConstants.DELETE_TODO,
    id
});

