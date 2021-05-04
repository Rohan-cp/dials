import data from '../../data/dummy-data';
import { GET_DAILY_DIGEST } from '../actions/articles';

const initialState = {
  articles: data,
}

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DAILY_DIGEST:
      return state;
    default:
      return state;
  }
}

export default mealsReducer;