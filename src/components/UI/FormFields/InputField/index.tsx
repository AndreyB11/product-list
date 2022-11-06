import { TextField, TextFieldProps } from "@mui/material";
import { FieldError } from "../FieldError";

type IProps = {
  field: any;
  isError: boolean;
  errorMessage: string;
} & TextFieldProps;

export const InputField = ({
  field,
  isError,
  errorMessage,
  ...defaultProps
}: IProps) => {
  return (
    <>
      <TextField error={isError} type="text" {...field} {...defaultProps} />
      <FieldError>{isError ? errorMessage : ""}&nbsp;</FieldError>
    </>
  );
};
