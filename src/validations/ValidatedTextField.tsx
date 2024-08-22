import React, { useState } from 'react';
import { TextField } from '@mui/material';

interface ValidatedTextField {
    validator: (value: string) => string | false;
    onChange: (isValid: boolean) => void;
    margin?:'normal' | 'none' | undefined;
    label: string;
    required?: boolean;
    fullWidth?: boolean;
    id?: string;
    name?: string;
    autoComplete?: string;
    autoFocus?: boolean;
    type?: string;
}


const ValidatedTextField: React.FC<ValidatedTextField> = ({
    label,
    validator,
    onChange,
    ...props
}) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        const newErrorMessage = validator(newValue);
        setValue(newValue);
        setError(!!newErrorMessage);
        setErrorMessage(newErrorMessage ? newErrorMessage : '');        
        onChange(!newErrorMessage);
    };

    return(
        <TextField
      label={label}
      value={value}
      onChange={handleChange}
      error={error}
      helperText={error ? errorMessage : ''}
      {...props}
    />
    );
};

export default ValidatedTextField;