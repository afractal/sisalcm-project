import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  name: string
  surname: string
  telephone: number
  dateOfBirth: number
  nationality: number
}

export const PersonalForm = () => {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div>
        <label>Name:</label>
        <input
          type="text"
          {...register("name", { required: "Name is required", maxLength: 20 })} />
      </div>

      <div>
        <label>Name:</label>

        <input
          type="text"
          {...register("surname", { required: "Surname is required", maxLength: 20 })} />
      </div>


      <div>
        <label>Name:</label>

        <input
          type="tel"
          {...register("telephone", { required: "Telephone is required", maxLength: 20 })} />
      </div>

      <div>
        <input
          type="date"
          {...register("dateOfBirth", { required: "Date of birth is required" })} />
      </div>


      <div>
        <label>Name:</label>

        <select {...register("nationality")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
      </div>

      <input type="submit" />
    </form>
  );
};


