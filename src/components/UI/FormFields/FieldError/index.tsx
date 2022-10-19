import React from "react";
import { Typography } from "@mui/material";
import { fieldErrorStyles } from "./fieldErrorStyles";

interface IProps {
  children: React.ReactNode;
}

export const FieldError = ({ children }: IProps) => {
  return <Typography sx={fieldErrorStyles.fieldError}>{children}</Typography>;
};
