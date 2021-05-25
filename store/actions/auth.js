export const SIGNUP = 'SIGNUP';

export const signup = (email, password) => {
  return async dispatch => {
    const response = await fetch(
      'https://knologic.chickenkiller.com:4000/user/create'
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
    dispatch({ type: SIGNUP })
  };
};