import React from 'react';
import { login } from '../../redux/actions/userActions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import styled from 'styled-components';
// import { useForm } from "react-hook-form";

class LoginForm extends React.Component {
// const { register, handleSubmit, errors } = useForm();
// console.log(errors);
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.credentials)
    .then(response => {
      if (response) {
        this.props.history.push("/childPage");
      }
    })
    .catch(error => {
      console.log('Login Error:', error);
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSumbmit}>
          <input type="text" placeholder="Username" name="username" value={this.state.credentials.username} onChange={this.handleChange} />
          <input type="text" placeholder="Password" name="password" value={this.state.credentials.password} onChange={this.handleChange} />
          <button type='submit'>Submit</button>
          {/*<button>{this.props.loggingIn ? "Logging In" : "Submit"}</button> //How i once did the submit button*/}
        </form>

        <Link to={`/register`}>Register</Link>  
      </div>
    )
  };
};

const mapStateToProps = state => ({
  error: state.error,
  loggingIn: state.loggingIn
});

export default connect( mapStateToProps, { login })(LoginForm);