import React from 'react';
import MainNavigator from './navigator/MainNavigator';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import articlesReducer from './store/reducers/articles'

const rootReducer = combineReducers({
  articles: articlesReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  );
}

