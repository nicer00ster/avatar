import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  getUsers() {
    fetch('http://127.0.0.1:8000/api/v1/users/1/')
    .then(res => res.json())
    .then(data => console.log(data))
  }
  render() {
    return <div>Hello {this.props.name} <button onClick={() => this.getUsers()}></button> </div>;
  }
}

ReactDOM.render(<App name="Alex" />, document.body);
