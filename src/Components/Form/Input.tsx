import React from "react";
import { InputProps } from "../Types/InputProps";

const Input = (props: InputProps) => {
  return (
    <input
      type={props.type}
      id={props.id}
      name={props.name}
      className={props.className}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    ></input>
  );
};

export default Input;
