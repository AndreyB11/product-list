import { TextField, TextFieldProps } from "@mui/material";
import { FieldError } from "../FieldError";

interface IProps {
  defaultProps: TextFieldProps;
  value: any;
  isError?: boolean;
  error?: string;
}

export const InputField = ({ value, isError, error, defaultProps }: IProps) => {
  return (
    <>
      <TextField error={isError} type="text" value={value} {...defaultProps} />
      <FieldError>{isError ? error : ""}&nbsp;</FieldError>
    </>
  );
};
