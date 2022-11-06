import { TextField, TextFieldProps } from "@mui/material";
import { FieldError } from "../FieldError";

interface IProps {
  field: any;
  isError: boolean;
  error: string;
  defaultProps: TextFieldProps;
}

export const InputField = ({ field, isError, error, defaultProps }: IProps) => {
  return (
    <>
      <TextField error={isError} type="text" {...field} {...defaultProps} />
      <FieldError>{isError ? error : ""}&nbsp;</FieldError>
    </>
  );
};
