import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import { useForm } from "react-hook-form";

class LoginForm extends React.Component {
  
// const { register, handleSubmit, errors } = useForm();
// console.log(errors);

  render(){
    return (
      <div>
        <form onSubmit={(e) => this.handleSumbmit(e)}>
          <input type="text" placeholder="Username" name="Username"  />
          <input type="text" placeholder="Password" name="Password" />
          <input type="submit" />
        </form>

        <Link to={`/register`}>Register</Link>  
      </div>
  )};

};

export default LoginForm;