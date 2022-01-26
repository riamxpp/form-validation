import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TypeInput } from "./Types/TypeInput";
import style from "./Form.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "./Form/Input";

export default function App() {
  const [error, setError] = useState(false);
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");

  const schema = yup
    .object({
      fullName: yup.string().min(2).required(),
      email: yup.string().email().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeInput>({
    resolver: yupResolver(schema),
  });

  function cpfHandleChange(event: React.FormEvent<HTMLInputElement>) {
    setCpf((event.target as HTMLInputElement).value);
  }
  function cepHandleChange(event: React.FormEvent<HTMLInputElement>) {
    setCep((event.target as HTMLInputElement).value);
  }

  const onSubmit: SubmitHandler<TypeInput> = (data) => {
    data.cpf = cpf;
    data.cep = cep;
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.fullName}>
        <div>{errors.fullName && <span>This field is required</span>}</div>
        <input
          {...register("fullName", { required: true })}
          placeholder="Full Name"
          type="text"
          className={`${style.input} `}
          id="fullName"
          name="fullName"
        />
      </div>
      <div className={style.cpf}>
        <div>{error && <span>This field is required</span>}</div>
        <Input
          placeholder="CPF"
          type="text"
          className={style.input}
          name="cpf"
          id="cpf"
          value={cpf}
          onChange={cpfHandleChange}
        />
      </div>
      <div className={style.cep}>
        <div>{error && <span>This field is required</span>}</div>
        <Input
          type="text"
          placeholder="CEP"
          className={style.input}
          name="cep"
          id="cep"
          value={cep}
          onChange={cepHandleChange}
        />
      </div>
      <div className={style.email}>
        <div>{errors.email && <span>This field is required</span>}</div>
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="Email"
          className={style.input}
          name="email"
          id="email"
        />
      </div>

      <div className={style.button}>
        <input type="submit" />
      </div>
    </form>
  );
}
