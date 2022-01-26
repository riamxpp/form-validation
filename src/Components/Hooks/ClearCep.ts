export function clearCep(cep: string): string {
  cep.replace("-", "");
  return cep;
}
