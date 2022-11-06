import { ReactNode } from "react";
import { Typography } from "@mui/material";
import { Style } from "shared/theme";

interface IProps {
  children: ReactNode;
}

export const fieldErrorStyles: Style = {
  fieldError: {
    color: "red",
    whiteSpace: "pre-line",
    fontSize: "13px",
    marginTop: "5px",
  },
};

export const FieldError = ({ children }: IProps) => (
  <Typography sx={fieldErrorStyles.fieldError}>{children}</Typography>
);
