import data from '../../data/dummy-data';
import { GET_DAILY_DIGEST } from '../actions/articles';

const initialState = {
  articles: [],
}

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DAILY_DIGEST:
      // console.log(action.articles)
      return {
        articles: action.articles
      };
    default:
      return state;
  }
}

export default mealsReducer;