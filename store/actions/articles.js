import Test from "../../models/Test";

export const GET_DAILY_DIGEST = 'GET_DAILY_DIGEST';

export const getDailyDigest = () => {
  return async dispatch => {
    const response = await fetch(
      'https://rn-test-d3ab9-default-rtdb.firebaseio.com/test.json'
    , {
      method: 'POST',
      headers: {
        'Content-type' : 'applications/json'
      },
      body: JSON.stringify({
        "my own testint key": "12234",
        "body type": "checking"
      }),
    });

    const resData = await response.json();
    console.log(resData);
    const loaderArticles = [];
    for (const key in resData) {
      loaderArticles.push(
        new Test(
          resData[key].userId,
          resData[key].id,
          resData[key].title,
          resData[key].body
        )
      );
    }
    dispatch({type: GET_DAILY_DIGEST});
  };
};