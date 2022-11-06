import { TextField, TextFieldProps } from "@mui/material";
import { FieldError } from "../FieldError";

interface IProps extends TextFieldProps {
  field: any;
  isError: boolean;
  error: string;
}

export const InputField = ({ field, isError, error, defaultProps }: IProps) => {
  return (
    <>
      <TextField error={isError} type="text" {...field} {...defaultProps} />
      <FieldError>{isError ? error : ""}&nbsp;</FieldError>
    </>
  );
};
