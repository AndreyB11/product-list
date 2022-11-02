import React from "react";
import { Box, CssBaseline, Container } from "@mui/material";
import { pageLayoutStyles } from "./pageLayoutStyles";

interface IProps {
  header: React.ReactNode;
  children?: React.ReactNode;
}

export const PageLayout = ({ children, header }: IProps) => {
  return (
    <Box sx={pageLayoutStyles.containerWrapper}>
      {header}
      <CssBaseline />
      <Container sx={pageLayoutStyles.container}>{children}</Container>
    </Box>
  );
};
