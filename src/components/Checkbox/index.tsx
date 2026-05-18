import React from 'react';
import { StyledCheckbox } from './styles';

interface CheckboxProps {
  label: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  required?: boolean;
}

export function Checkbox({
  label,
  name,
  onChange,
  checked,
  required = false,
}: CheckboxProps): JSX.Element {
  return (
    <StyledCheckbox>
      <label>
        {label}
        <input
          type="checkbox"
          name={name}
          required={required}
          onChange={onChange}
          checked={checked}
        />
        <span className="checkmark"></span>
      </label>
    </StyledCheckbox>
  );
}
