import { FilledTextFieldProps, TextField } from "@mui/material";
import { FieldError } from "../FieldError";

interface IProps extends FilledTextFieldProps {
  field: any;
  isError: boolean;
  errorMessage: string;
}

export const InputField = ({
  field,
  isError,
  errorMessage,
  ...defaultProps
}: IProps) => (
  <>
    <TextField error={isError} type="text" {...field} {...defaultProps} />
    <FieldError>{isError ? errorMessage : ""}&nbsp;</FieldError>
  </>
);
