import React from 'react';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import './index.css';
import './icofont.min.css';

import rootReducer from "./reducers";
import Root from './Root';



let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}
