import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from './rootReducer';

const ReduxLoggerMiddleware = createLogger({ collapsed: true });

export default initialState => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      ReduxLoggerMiddleware
    )
  );
};
