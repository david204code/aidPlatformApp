import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    axios
    .post("http://localhost:3000/sessions", 
    {
      user: {
        email: this.state.email,
        password: this.state.password
      }
    },
    
    { withCredentials: true }
    )
    .then(response => {
      if (response.data.logged_in === true ) {
        this.props.handleSuccessfulAuth(response.data);
      }
    })
    .catch(error => {
      console.log("Login error", error);
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input 
            type="password"
            name="password"
            placeholder="Your password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login