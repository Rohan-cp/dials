import { GET_DAILY_DIGEST } from "../actions/articles";
import { GET_SAVED_ARTICLES } from "../actions/articles";
import data from "../../data/dummy-data";

const initialState = {
  articles: data,
  articlesSavedData: []
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DAILY_DIGEST:
      return {
        ...state,
        articles: action.articles,
      };
    case GET_SAVED_ARTICLES:
      return {
        ...state,
        articlesSavedData: action.articlesSavedData,
      };
    default:
      return state;
  }
};

export default mealsReducer;
