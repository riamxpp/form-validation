import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TypeInput } from "./Types/TypeInput";
import style from "./Form.module.css";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TypeInput>();

  const onSubmit: SubmitHandler<TypeInput> = (data) => console.log(data);
  const onSubmitError: SubmitHandler<TypeInput> = (data) => console.log(data);

  console.log(watch("fullName"));
  console.log(watch("cpf"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.fullName}>
        {errors.fullName && <span>This field is required</span>}
        <input
          {...register("fullName", { required: true })}
          placeholder="Full Name"
          type="text"
          className={`${style.input} `}
        />
      </div>
      <div className={style.cpf}>
        <input
          {...register("cpf", { required: true })}
          placeholder="CPF"
          type="text"
          className={style.input}
        />
        {errors.cpf && <span>This field is required</span>}
      </div>
      <div className={style.cep}>
        <input
          {...register("cep", { required: true })}
          type="text"
          placeholder="CEP"
          className={style.input}
        />
        {errors.email && <span>This field is required</span>}
      </div>
      <div className={style.email}>
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="Email"
          className={style.input}
        />
        {errors.email && <span>This field is required</span>}
      </div>

      <div className={style.button}>
        <input type="submit" />
      </div>
    </form>
  );
}
