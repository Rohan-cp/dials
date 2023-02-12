export const GET_DAILY_DIGEST = "GET_DAILY_DIGEST";
export const GET_SAVED_ARTICLES = "GET_SAVED_ARTICLES";
import data from "../../data/dummy-data";

export const getDailyDigest = () => {
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
};

export const getDateDigest = (date) => {
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
};

export const getSavedArticles = () => {
  return async (dispatch) => {
    const DATA = data;
    const articlesSaved = await getMyArticlesData();
    console.log("articlesSaved", articlesSaved)
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
    })
  }
}

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

const parseSavedArticles = (jsonSavedArticles) => {
  console.log("jsonSavedArticles", jsonSavedArticles)
  return jsonSavedArticles
}

const fetchSavedArticles = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@articles_saved");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("error", error);
  }
  console.log("Done.");
};

const fetchArticlesSaved = async () => {
  console.log("props.navigation()", props.navigation.isFocused());
  try {
    if (props.navigation.isFocused()) {
      const articlesSaved = await getSavedArticles();
      console.log("articlesSaved", articlesSaved);
      if (articlesSaved.saved) {
        setArticleData((currArticleData) =>
          currArticleData.filter((el) => articlesSaved.saved.includes(el.id))
        );
      }
    }
  } catch (error) {
    console.log("error", error);
  }
};
