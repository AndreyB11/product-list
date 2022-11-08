import { FilledTextFieldProps, TextField } from "@mui/material";
import { FieldError } from "../FieldError";

interface IProps extends FilledTextFieldProps {
  value: any;
  isError?: boolean;
  errorMessage?: string;
}

export const InputField = ({
  value,
  isError,
  errorMessage,
  ...defaultProps
}: IProps) => (
  <>
    <TextField error={isError} value={value} type="text" {...defaultProps} />
    <FieldError>{isError ? errorMessage : ""}&nbsp;</FieldError>
  </>
);
