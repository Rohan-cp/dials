import { IS_EMAIL_ID_VALID, IS_USERNAME_VALID, UPDATE_EMAILID, UPDATE_USERNAME } from "../actions/updateUserdata";

const initialState = {
  val: "",
  valid: "",
}

const tempReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_EMAIL_ID_VALID:
      return {
        ...state,
        valid: action.valid,
      };
    case IS_USERNAME_VALID:
      return {
        ...state,
        valid: action.valid,
      }
    case UPDATE_EMAILID:
      return {
        ...state,
        val: action.val,
      }
    case UPDATE_USERNAME:
      return {
        ...state,
        val: action.val,
      }
    default:
      return state;
  }
}

export default tempReducer;