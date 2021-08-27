import { LOGIN, SIGNUP, FETCH } from "../actions/auth";

const initialState = {
  token: null,
  userId: null,
  displayName: null,
  emailId: null,
  password: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    }
    case SIGNUP: {
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    }
    case FETCH: {
      return {
        ...state,
        displayName: action.userData.username,
        emailId: action.userData.emailId,
        password: action.userData.password,
      };
    }
    default:
      return state;
  }
};
