import { useForm, SubmitHandler } from "react-hook-form";
import { TypeInput } from "./Types/TypeInput";
import style from "./Form.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function App() {
  const schema = yup
    .object({
      fullName: yup
        .string()
        .min(2, "minimo 2 caracteres")
        .required("nome é obrigatório"),
      email: yup.string().email().required("email é obrigatório"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<TypeInput> = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.fullName}>
        <div>
          <span>{errors.fullName?.message}</span>
        </div>
        <input
          {...register("fullName", { required: true })}
          placeholder="Full Name"
          type="text"
          className={`${style.input} `}
          id="fullName"
          name="fullName"
        />
      </div>
      <div className={style.email}>
        <div>
          <span>{errors.email?.message}</span>
        </div>
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
