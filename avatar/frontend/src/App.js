import React from 'react';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

import rootReducer from "./reducers";
import Root from './Root';

let store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}
