import { COPY_PWD, CURR_PWD, NEW_PWD } from "../actions/temp";

const initialState = {
  currentPwd: "",
  newPwd: "",
  copyNewPwd: "",
}

const tempReducer = (state = initialState, action) => {
  switch (action.type) {
    case COPY_PWD:
      return {
        ...state,
        copyNewPwd: action.val,
      };
    case CURR_PWD:
      return {
        ...state,
        currentPwd: action.val,
      }
    case NEW_PWD:
      return {
        ...state,
        newPwd: action.val,
      }
    default:
      return state;
  }
}

export default tempReducer;