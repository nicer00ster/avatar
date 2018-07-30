import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../actions";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  }

  onSubmit = e => {
    const { username, password } = this.state;
    e.preventDefault();
    this.props.register(username, password);
  }

  render() {
    const { errors } = this.props;
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />
    }
    return (
      <form className="_register" onSubmit={this.onSubmit}>
        <h2>Create an account</h2>
          {/* {errors
            ? <ul>
              {errors.map(err => (
                <li key={err.field}>{err.message}</li>
              ))}
            </ul>
            : null
          } */}
          <input
            type="text"
            placeholder="Username"
            onChange={e => this.setState({ username: e.target.value })} />
          <input
            type="password" id="password"
            placeholder="Password"
            onChange={e => this.setState({ password: e.target.value })} />
            <button type="submit">Register</button>
          <span>
            Already have an account? <Link to="/login">Login!</Link>
          </span>
        </form>
    )
  }
}

const mapStateToProps = state => {
  let errors = [];
  if (state.auth.errors) {
    errors = Object.keys(state.auth.errors).map(field => {
      return {field, message: state.auth.errors[field]};
    });
  }
  return {
    errors,
    isAuthenticated: state.auth.isAuthenticated
  };
}

const mapDispatchToProps = dispatch => {
  return {
    register: (username, password) => dispatch(auth.register(username, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
