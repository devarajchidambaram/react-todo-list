import {userConstants} from  '../constants'

// let user = JSON.parse(localStorage.getItem('user'));
// const initialState = usr ? { loggedIn: true, user } :e {};
const initialState = {
  username: '',
  password: '',
  submitted: false
};

export default function authentication(state = initialState, action) {
  
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:   
     
      return {
        loggingIn: true,
        user: action.user
      };

    case userConstants.LOGIN_SUCCESS:

      
      return {
        ...state,
        loggedIn: true,
        username: action.payload.username,
        password : action.payload.password
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      console.log('default called...........')
      return state
  }
}