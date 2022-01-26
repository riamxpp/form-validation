export type InputProps = {
  type: string;
  placeholder?: string;
  className?: string;
  name: string;
  id: string;
  value: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
};
