import React from 'react';
import Registration from './Registration';
import Login from './Login';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <Registration handleSuccessfulAuth ={this.handleSuccessfulAuth} />
        <Login handleSuccessfulAuth ={this.handleSuccessfulAuth} />
      </div>
    );
  }
}

export default Home
