import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import { auth } from '../actions';

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  }
  onSubmit = e => {
    const { username, password } = this.state;
    e.preventDefault();
    this.props.login(username, password);
  }

  render() {
    const { isAuthenticated, errors } = this.props;
    if(isAuthenticated) {
      return <Redirect to="/" />
    }
    return (
      <form className="_login" onSubmit={this.onSubmit}>
          <h2>Avatar</h2>
            <h4>Log in to find a date!</h4>
            <input
              type="text"
              placeholder="Username"
              onChange={e => this.setState({ username: e.target.value })} />
            <input
              type="password" id="password"
              placeholder="Password"
              onChange={e => this.setState({ password: e.target.value })} />
            <button type="submit">Login</button>
            <div>
              Don't have an account?
            </div>
            <Link to="/register">Register here!</Link>
          </form>
    )
  }
}

const mapStateToProps = state => {
  let errors = [];
  if (state.auth.errors) {
    errors = Object.keys(state.auth.errors).map(field => {
      return { field, message: state.auth.errors[field] };
    });
  }
  return {
    errors,
    isAuthenticated: state.auth.isAuthenticated
  };
}

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => {
      return dispatch(auth.login(username, password));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
