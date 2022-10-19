import { Box, CssBaseline, Container } from "@mui/material";
import { ReactNode } from "react";
import { pageLayoutStyles } from "./pageLayoutStyles";

interface IProps {
  header: ReactNode;
  children: ReactNode;
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
