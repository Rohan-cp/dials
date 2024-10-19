export const GET_DAILY_DIGEST = "GET_DAILY_DIGEST";
export const GET_SAVED_ARTICLES = "GET_SAVED_ARTICLES";
import data from "../../data/dummy-data";

const a = axios.create({
  baseURL: "https://knologic.chickenkiller.com/",
  timeout: 10000,
});
// need async funcs for
// - get daily digest (how to use local time to get daily digest)
// - given saved saved article ids, fetch articles (what if articleId cannot be mapped to one in db?)
// - get article data given a timestamp

export const getDailyDigest = () => {
  return async (dispatch) => {
    const response = await a.get(
      "https://knologic.chickenkiller.com:4000/getDailyDigest"
    );

    if (response.ok) {
      console.log("success!");
    }
    const resData = await response.json();
    articles = resData;
    dispatch({ type: GET_DAILY_DIGEST, articles: articles });
  };
};

export const getSavedArticlesData = (savedArticleIds) => {
  return async (dispatch) => {
    const response = await a.get(
      "https://knologic.chickenkiller.com:4000/getSavedArticlesData",
      { savedArticleIds: savedArticleIds }
    );

    if (response.ok) {
      console.log("success!");
    }
    const resData = await response.json();
    articles = resData;
    dispatch({ type: GET_SAVED_ARTICLES, articles: articles });
  };
};

/* export const getDailyDigest = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://knologic.chickenkiller.com:4000/post/all"
    );

    if (response.ok) {
      console.log("success!");
    }
    const resData = await response.json();
    articles = resData;
    dispatch({ type: GET_DAILY_DIGEST, articles: articles });
  };
}; */

export const getDateDigest = (date) => {
  return async (dispatch) => {
    const response = await a.get(
      "https://knologic.chickenkiller.com:4000/getDateDigest",
      { date: date }
    );

    if (response.ok) {
      console.log("success!");
    }
    const resData = await response.json();
    articles = resData;
    dispatch({ type: GET_DAILY_DIGEST, articles: articles });
  };
};

/* export const getSavedArticles = () => {
  return async (dispatch) => {
    const DATA = data;
    const articlesSaved = await getMyArticlesData();
    console.log("articlesSaved", articlesSaved);
    let articlesSavedData = DATA;
    if (articlesSaved.saved) {
      articlesSavedData = articlesSavedData.filter((el) =>
        articlesSaved.saved.includes(el.id)
      );
    }

    dispatch({
      type: GET_SAVED_ARTICLES,
      articlesSavedData: articlesSavedData,
    });
  };
};

export const saveArticle = async (articleId) => {
  return async (dispatch) => {
    const savedArticleIds = await fetchSavedArticles();
    if (savedArticleIds && !savedArticleIds.includes(newArticleId)) {
      savedArticleIds.push(newArticleId);
    } else if (!savedArticleIds) {
      savedArticleIds = [value];
    }
    const jsonValue = JSON.stringify(savedArticleIds);
    await AsyncStorage.setItem("@articles_saved", jsonValue);

    dispatch({
      type: SAVE_ARTICLE,
    });
  };
}; */

/* const saveArticle = async (newArticleId) => {
  try {
    
    if (savedArticleIds && !savedArticleIds.includes(newArticleId)) {
      savedArticleIds.push(newArticleId);
    } else if (!savedArticleIds) {
      savedArticleIds = [value];
    }
    const jsonValue = JSON.stringify(savedArticleIds);
    await AsyncStorage.setItem("@articles_saved", jsonValue);
  } catch (e) {
    console.log("e", e);
  }
}; */
