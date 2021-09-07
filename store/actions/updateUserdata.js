import axios from "axios";

export const UPDATE_USERNAME = "UPDATE_USERNAME";
export const UPDATE_EMAILID = "UPDATE_EMAILID";
export const UPDATE_PWD = "UPDATE_PWD";
export const IS_USERNAME_VALID = "IS_USERNAME_VALID";
export const IS_EMAIL_ID_VALID = "IS_EMAIL_ID_VALID";

const a = axios.create({
  baseURL: "https://knologic.chickenkiller.com/",
  timeout: 10000,
});

export const isValidUsername = (val) => {
  return async (dispatch) => {
    const response = await a.post(
      "https://knologic.chickenkiller.com:4000/user/isUsernameValid",
      { name: val }
    );

    if (!response.ok) {
      const errorResData = await response.json();

      // see what kind of response we get from the API we're working with
      const errorId = errorResData.error.message;
      let message = "Something went wrong!";

      // example error
      if (errorId === "EMAIL_NOT_FOUND") {
        message = "This email could not be found";
      }

      // not sure what below line does
      // console.log(JSON.stringify(response));
      throw new Error(message);
    }

    const resData = await response.json();
    console.log(resData);

    dispatch({
      type: IS_USERNAME_VALID,
      valid: resData.validity,
    });
  };
};

export const isValidEmail = (val) => {
  return async (dispatch) => {
    const response = await a.post(
      "https://knologic.chickenkiller.com:4000/user/isEmailValid",
      { name: val }
    );

    if (!response.ok) {
      const errorResData = await response.json();

      // see what kind of response we get from the API we're working with
      const errorId = errorResData.error.message;
      let message = "Something went wrong!";

      // example error
      if (errorId === "EMAIL_NOT_FOUND") {
        message = "This email could not be found";
      }

      // not sure what below line does
      // console.log(JSON.stringify(response));
      throw new Error(message);
    }

    const resData = await response.json();
    console.log(resData);

    dispatch({
      type: IS_EMAIL_ID_VALID,
      valid: resData.validity,
    });
  };
};

export const updateUsername = (val) => {
  return async (dispatch) => {
    const response = await a.post(
      "https://knologic.chickenkiller.com:4000/user/updateUsername",
      { name: val }
    );

    if (!response.ok) {
      const errorResData = await response.json();

      // see what kind of response we get from the API we're working with
      const errorId = errorResData.error.message;
      let message = "Something went wrong!";

      // example error
      if (errorId === "EMAIL_NOT_FOUND") {
        message = "This email could not be found";
      }

      // not sure what below line does
      // console.log(JSON.stringify(response));
      throw new Error(message);
    }

    const resData = await response.json();
    console.log(resData);

    dispatch({
      type: UPDATE_USERNAME,
      success: response.ok,
    });
  };
};

export const updateEmailId = (val) => {
  return async (dispatch) => {
    const response = await a.post(
      "https://knologic.chickenkiller.com:4000/user/updateEmailId",
      { email: val }
    );

    if (!response.ok) {
      const errorResData = await response.json();

      // see what kind of response we get from the API we're working with
      const errorId = errorResData.error.message;
      let message = "Something went wrong!";

      // example error
      if (errorId === "EMAIL_NOT_FOUND") {
        message = "This email could not be found";
      }

      // not sure what below line does
      // console.log(JSON.stringify(response));
      throw new Error(message);
    }

    const resData = await response.json();
    console.log(resData);

    dispatch({
      type: UPDATE_EMAILID,
      success: response.ok,
    });
  };
};

export const updatePwd = (val) => {
  return async (dispatch) => {
    const response = await a.post(
      "https://knologic.chickenkiller.com:4000/user/updateEmailId",
      { email: val }
    );

    if (!response.ok) {
      const errorResData = await response.json();

      // see what kind of response we get from the API we're working with
      const errorId = errorResData.error.message;
      let message = "Something went wrong!";

      // example error
      if (errorId === "EMAIL_NOT_FOUND") {
        message = "This email could not be found";
      }

      // not sure what below line does
      // console.log(JSON.stringify(response));
      throw new Error(message);
    }

    const resData = await response.json();
    console.log(resData);

    dispatch({
      type: UPDATE_EMAILID,
      success: response.ok,
    });
  };
};
