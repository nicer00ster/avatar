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
      <form onSubmit={this.onSubmit}>
        <fieldset>
          <legend>Login</legend>
          {errors
            ? <ul>
              {errors.map(err => (
                <li key={err.field}>{err.message}</li>
              ))}
              </ul>
            : null
          }
          <p>
            <label htmlFor="username">Username</label>
            <input
              type="text" id="username"
              onChange={e => this.setState({ username: e.target.value })} />
          </p>
          <p>
            <label htmlFor="password">Password</label>
            <input
              type="password" id="password"
              onChange={e => this.setState({ password: e.target.value })} />
          </p>
          <p>
            <button type="submit">Login</button>
          </p>

          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </fieldset>
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
