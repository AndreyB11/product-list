import { Box, CssBaseline, Container } from "@mui/material";
import { FC, ReactNode } from "react";
import { Header } from "../Header";
import { pageLayoutStyles } from "./pageLayoutStyles";

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <Box sx={pageLayoutStyles.containerWrapper}>
      <Header />
      <CssBaseline />
      <Container
        component={"main"}
        maxWidth={"lg"}
        sx={pageLayoutStyles.container}
      >
        {children}
      </Container>
    </Box>
  );
};
