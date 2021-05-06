import React from 'react';
import MainNavigator from './navigator/MainNavigator';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';
import ReduxThunk from 'redux-thunk';

import articlesReducer from './store/reducers/articles';

enableScreens();

const rootReducer = combineReducers({
  articles: articlesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  );
}

