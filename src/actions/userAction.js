import { userConstants} from '../constants'
import loginService from '../service'

// Action to add article to store
 export  const login = (username, password) =>{

   return dispatch =>{
      loginService(username, password).then(()=>{
         console.log('response==================')
      }).catch((e)=>{
          console.log('---errr-------', e)
      })

      dispatch(request({ username, password }));
      function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
      
   }
 }
 


