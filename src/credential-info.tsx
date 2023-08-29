import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  email: string
  password: string
}


export const CredentialsForm = () => {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  )
}


export const CredentialsForm = () => { 
  
  
  
  
  return(
    
  );
};













