import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reduxStore from './store';

import App from './components/App';
import Login from './components/Login';

const store = reduxStore();

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default Root;
