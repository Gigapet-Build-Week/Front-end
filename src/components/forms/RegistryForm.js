import React from "react";

import { Link } from 'react-router-dom';

// import { render } from "@testing-library/react";
// import { useForm } from "react-hook-form";

class RegistryForm extends React.Component {
  // const { register, handleSubmit, errors, reset } = useForm();
  // // const onSubmit = data => console.log(data);
  // // console.log(errors);

  render(){
    return (   
      
      <div> 
        
        <form onSubmit={(e) => this.handleSumbmit(e)}>
          <input type="text" placeholder="UserName" name="UserName" />
          <input type="text" placeholder="Password" name="Password" />
          
          <input type="submit" />

          <input type="reset" /> 
        </form>

      <Link to={`/`}>Login</Link>  
      </div>

    )};
};

export default RegistryForm;
