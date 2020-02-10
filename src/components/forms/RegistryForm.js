import React from "react";
import { Register } from '../../redux/actions/userActions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

// import { render } from "@testing-library/react";
// import { useForm } from "react-hook-form";

const FormContainer = styled.div`
position: absolute;
width: 50%;
height: 50%;
top: 25%;
left: 25%;
background: #e96a2b;
border-radius: 10px;
`;

const RegStyle = styled.form`
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

[type="submit"], [type="reset"] {
  background-color: #4CAF50;
  border: none;
  color: OldLace;
  padding: 1% 0;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 150%;
}
`;

class RegistryForm extends React.Component {
  // const { register, handleSubmit, errors, reset } = useForm();
  // // const onSubmit = data => console.log(data);
  // // console.log(errors);
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
    this.props.register(this.state.credentials)
    .then(response => {
      if (response) {
        this.props.history.push("/childPage");
      }
    });
  };

  render(){
    return (


      <FormContainer>
        <Link to={`/`}>Back To Login</Link>
        <RegStyle className = "RegStyle" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="UserName" name="username" value={this.state.credentials.username} onChange={this.handleChange} />
          <input type="text" placeholder="Password" name="password" value={this.state.credentials.password} onChange={this.handleChange} />
          <input type="submit" />
          <input type="reset" />
        </RegStyle>
      </FormContainer>

    )};
};

const mapStateToProps = state => ({
  error: state.error,
  registering: state.registering
});

export default connect( mapStateToProps, { Register })(RegistryForm);