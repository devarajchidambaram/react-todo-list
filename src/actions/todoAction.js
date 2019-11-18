import { ADD_TODO} from '../constants/action_types'

// Action to add article to store
 export  const addTodo = todo => ({
    type: ADD_TODO,
     todo
});

