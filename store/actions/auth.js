import axios from "axios";

const a = axios.create({
  baseURL: "https://knologic.chickenkiller.com/",
  timeout: 10000,
});

export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";

export const signup = (email, password) => {
  return async (dispatch) => {
    const response = await a.post(
      "https://knologic.chickenkiller.com:4000/user/create",
      { email: email, password: password, name: "johnS" }
    );

    if (!response.ok) {
      const errorResData = await response.json();

      // see what kind of response we get from the API we're working with
      const errorId = errorResData.error.message;
      let message = 'Something went wrong!';

      // example error
      if (errorId === 'EMAIL_NOT_FOUND') {
        message = 'This email could not be found';
      }

      // not sure what below line does
      // console.log(JSON.stringify(response));
      throw new Error(message);
    }

    const resData = await response.json();
    console.log(resData);

    dispatch({ type: SIGNUP, token: resData.sessionId, userId: resData.userId });
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    const response = a
      .post("https://knologic.chickenkiller.com:4000/user/login", {
        email: "test@a.com",
        password: "test123",
      })
      .then((response) => {
        console.log(JSON.stringify(response));
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
      });
    dispatch({ type: LOGIN });
  };
};
