import { UPDATE_DATE } from '../actions/date';

const initialState = {
  date: new Date().toISOString().slice(0, 10),
}

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DATE:
      return {
        date: action.date
      };
    default:
      return state;
  }
}

export default dateReducer;