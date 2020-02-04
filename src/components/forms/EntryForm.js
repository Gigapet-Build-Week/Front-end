import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
//import styled from 'styled-components';

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select name="Category" ref={register}>
        <option value="Fruit">Fruit</option>
        <option value=" Vegetable"> Vegetable</option>
        <option value=" Grain"> Grain</option>
        <option value=" Protein"> Protein</option>
        <option value=" Dairy"> Dairy</option>
        <option value=" Sugars"> Sugars</option>
      </select>
      <input type="number" placeholder="Serving Size" name="Serving Size" ref={register({min: 0})} />

      <input type="submit" />
    </form>
  );
}