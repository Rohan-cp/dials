import axios from 'axios';

const a = axios.create({
  baseURL: 'https://knologic.chickenkiller.com/',
  timeout: 10000,
});

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';

export const signup = (email, password) => {
  return async dispatch => {
  const response = a.post('https://knologic.chickenkiller.com:4000/user/create', 
  {email: email, password: password, name: 'johnS'})
  .then(response => {
    console.log(JSON.stringify(response));
  }).catch(err => {
    console.log(JSON.stringify(err));
  })
    dispatch({ type: SIGNUP })
  };
};

export const login = (email, password) => {
  return async dispatch => {
    const response = a.post('https://knologic.chickenkiller.com:4000/user/login', 
  {email: 'jo', password: 'jo'})
  .then(response => {
    console.log(JSON.stringify(response));
  }).catch(err => {
    console.log(JSON.stringify(err));
  })
    dispatch({ type: LOGIN })
  };
};