function login(username, password){

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`http://localhost:3008/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(result => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
           // localStorage.setItem('user', JSON.stringify(user));
           console.log('=Response@@@@@@@@===============', result ) 
          //  return user;

          localStorage.setItem('token', result);
          result.isAuthenticated = true;
          window.location.href = '/todo'
          return result;
        }).catch((e)=>{
            console.log('error=========', e)
        })
}

function handleResponse(response){
   return response.text().then((text)=>{
        console.log('text===', text)
        return text;
    }).then((text)=>{
        return JSON.parse(text)
    }).catch((e)=>{
        console.log('error===========', e)
    })
}

export default login;