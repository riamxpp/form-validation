import React from "react";
import { Cep } from "../../Types/Cep";
import { clearCep } from "../../Hooks/ClearCep";
import { FetchCep } from "../../Hooks/FetchCep";

const CepValidator = async ({ cepUser }: Cep) => {
  const cleanCep: string = clearCep(cepUser);
  const { date, error } = await FetchCep(cleanCep);
  const { cep, localidade, uf } = date;
  console.log(date);
  return {
    cep,
    localidade,
    uf,
    error,
  };
};

export default CepValidator;
