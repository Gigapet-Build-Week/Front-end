import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data, e) => {
    console.log('Submit event', e)
    alert(JSON.stringify(data))
  };

  return (
    <form onSubmit={handleSubmit(async (data) => await fetchAPI(data))}>
      <input name="UserName" ref={register} />
      <input name="Password" ref={register} />
      <button type="submit">Submit</button>
    </form>
  )
};