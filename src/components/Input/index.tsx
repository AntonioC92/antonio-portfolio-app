import { StyledInput } from './styles';

interface InputProps {
  type: string;
  placeholder?: string;
  required?: boolean;
}

export function Input({
  type,
  placeholder,
  required = false,
}: InputProps): JSX.Element {
  return (
    <StyledInput type={type} placeholder={placeholder} required={required} />
  );
}
