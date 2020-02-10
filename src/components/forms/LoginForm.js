import React from 'react';
import { Login } from '../../redux/actions/userActions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';


const FormContainer = styled.div`
position: absolute;
width: 50%;
height: 50%;
top: 25%;
left: 25%;
background: #e96a2b;
border-radius: 10px;
`;

const LoginEntry = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
input {
  width: 50%;
  height: 50%;
  padding: 2% 1%;
  margin: 2% 0;
  font-size: 150%;
  box-sizing: border-box;
  background-color: DarkSlateBlue;
  color: OldLace;
}
input:focus {
  border: 3px solid #2f4f4f;
}
[type="submit"] {
  background-color: #4CAF50;
  border: none;
  color: OldLace;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 150%;
}
`;

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
    //console.log(event.target.value);
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = event => {
    //console.log(event);
    event.preventDefault();
    this.props.Login(this.state.credentials)
    .then(response => {
      if (response) {
        this.props.history.push("/childPage");
      }
    })
    .catch(error => {
      console.log('handleSubmit Error:', error);
    })
  };

  render() {
    //console.log(this.props.login);
    return (
      <FormContainer>
        <LoginEntry className = 'LoginEntry' onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Username" name="username" value={this.state.credentials.username} onChange={this.handleChange} />
          <input type="password" placeholder="Password" name="password" value={this.state.credentials.password} onChange={this.handleChange} />
          <input type="submit" />
          {/*<button>{this.props.loggingIn ? "Logging In" : "Submit"}</button> //How i once did the submit button*/}
        </LoginEntry>

        <Link to={`/register`}>Register</Link>
      </FormContainer>
    )
  };
};

const mapStateToProps = state => ({
  error: state.error,
  loggingIn: state.loggingIn
});

export default connect( mapStateToProps, { Login })(LoginForm);