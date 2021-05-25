export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';

export const signup = (email, password) => {
  return async dispatch => {
    const response = await fetch(
      'https://knologic.chickenkiller.com:4000/user/create'
    ,
    {
      method: 'POST',
      headers: {
        'Content-type' : 'applications/json',
        'email': email,
        'name': "example",
        'password': password,
      }
    });
    
    if (!response.ok) {
      const errorResData = await response.json();
      console.log(errorResData);
    }

    const resData = await response.json();
    console.log(resData);
    dispatch({ type: SIGNUP })
  };
};

export const login = (email, password) => {
  return async dispatch => {
    const response = await fetch(
      'https://knologic.chickenkiller.com:4000/user/login'
    ,
    {
      method: 'POST',
      headers: JSON.stringify({
        email: email,
        name: "example",
        password: password,
      })
    });

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const resData = await response.json();
    console.log(resData);
    dispatch({ type: LOGIN })
  };
};