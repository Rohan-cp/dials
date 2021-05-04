import React from 'react';
import MainNavigator from './navigator/MainNavigator';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import articlesReducer from './store/reducers/articles'
import ReduxThunk from 'redux-thunk';

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

