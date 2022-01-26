import { useState } from "react";

export const FetchCep = async (
  cep: string
): Promise<{
  date: any;
  error: boolean;
}> => {
  const [error, setError] = useState<boolean>(false);
  const [date, setDate] = useState<any>();

  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const json = await response.json();
  if (response.ok) {
    setDate(json);
    // setError(false);
  } else {
    setError(true);
    // setDate(null);
  }
  return {
    date,
    error,
  };
};
