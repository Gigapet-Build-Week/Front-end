import React, {useState} from 'react';
// import styled from 'styled-components';
import { useForm } from "react-hook-form";


export default function App() {
  const { register, handleSubmit, errors } = useForm();
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(async (data) => await fetchAPI(data))}>
      <input type="text" placeholder="Username" name="Username" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
      <input type="text" placeholder="Password" name="Password" ref={register} />
      <input type="submit" />
    </form>
  );
};