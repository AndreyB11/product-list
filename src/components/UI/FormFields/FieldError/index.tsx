import React from "react";
import { styled, Typography } from "@mui/material";
import { TypographyProps } from "@mui/system";

const StyledError = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.error.main,
  whiteSpace: "pre-line",
  fontSize: "13px",
  marginTop: "5px",
}));

interface IProps {
  children: React.ReactNode;
}

const FieldError = ({ children }: IProps) => {
  return <StyledError>{children}</StyledError>;
};

export default FieldError;
