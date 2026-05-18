import { ReactNode } from 'react';
import { StyledButton } from './styles';

interface ButtonProps {
  children: ReactNode;
  text?: string;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  isAuth?: boolean;
  variant?: 'primary' | 'cancel' | 'destructive' | 'light';
  onClick?: () => void;
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  ...props
}: ButtonProps): JSX.Element {
  const style = {
    color: props.text,
    width: props.fullWidth ? '100%' : undefined,
  };

  return (
    <StyledButton
      className={variant && variant}
      onClick={onClick}
      style={style}
      type={props.type}
      disabled={props.disabled}
    >
      {children}
    </StyledButton>
  );
}
