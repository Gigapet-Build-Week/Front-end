import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="UserName" name="UserName" ref={register} />
      <input type="text" placeholder="Password" name="Password" ref={register} />
      
      <input type="submit" />

      <input type="reset" /> // standard reset button
      <input type="button" onClick={reset} />
      <input
        type="button"
        onClick={() => {
          reset({
            UserName: " ",
            Password: " ", 
          });
        }}
      />
    </form>
  );
}
