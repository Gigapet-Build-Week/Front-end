import React from "react";
import { Register } from '../../redux/actions/userActions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import { render } from "@testing-library/react";
// import { useForm } from "react-hook-form";

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
      
      <div> 
        
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="UserName" name="username" value={this.state.credentials.username} onChange={this.handleChange} />
          <input type="text" placeholder="Password" name="password" value={this.state.credentials.password} onChange={this.handleChange} />
          
          <input type="submit" />

          <input type="reset" /> 
        </form>

      <Link to={`/`}>Login</Link>  
      </div>

    )};
};

const mapStateToProps = state => ({
  error: state.error,
  registering: state.registering
});

export default connect( mapStateToProps, { Register })(RegistryForm);