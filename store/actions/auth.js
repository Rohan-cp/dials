export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';

export const signup = (email, password) => {
  console.log(email);
  console.log(password);
  return async dispatch => {
    const response = await fetch(
      'https://knologic.chickenkiller.com:4000/user/create'
    , {
      method: 'POST',
      headers: {
        'Content-type' : 'applications/json',
      },
      body: JSON.stringify({
        email: "test@hey.com",
        name: "example",
        password: "plswork",
      }),
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
      headers: {
        'Content-type' : 'applications/json',
      },
      body: JSON.stringify({
        email: "jo",
        password: "jo",
      })
    });

    if (!response.ok) {
      const errorResData = await response.json();
      console.log(errorResData);
    }

    const resData = await response.json();
    console.log(resData);
    dispatch({ type: LOGIN })
  };
};