import { TextField, TextFieldProps } from "@mui/material";
import { useField } from "formik";
import { FieldError } from "../FieldError";

interface IProps {
  defaultProps: TextFieldProps;
}

export const InputField = ({ defaultProps }: IProps) => {
  const [field, meta] = useField(defaultProps?.name!);
  const { touched, error } = meta;
  const isError = Boolean(touched && error);

  return (
    <>
      <TextField error={isError} type="text" {...field} {...defaultProps} />
      <FieldError>{isError ? error : ""}&nbsp;</FieldError>
    </>
  );
};
