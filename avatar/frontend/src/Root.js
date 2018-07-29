import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from "react-redux";

import Note from "./components/Note";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";
import Loading from './components/Loading';

import { auth } from "./actions";


class Root extends React.Component {
  componentDidMount() {
    this.props.loadUser();
  }

  Private = ({component: Component, ...rest}) => {
    return <Route {...rest} render={props => {
      if (this.props.auth.isLoading) {
        return <Loading />;
      } else if (!this.props.auth.isAuthenticated) {
        return <Redirect to="/login" />;
      } else {
        return <Component {...props} />
      }
    }} />
  }

  render() {
    let { Private } = this;
    return (
      <Router>
        <Switch>
          <Private exact path="/" component={Note} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}


const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => {
      return dispatch(auth.loadUser());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
