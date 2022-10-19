import { Box, CssBaseline } from "@mui/material";
import { FC, ReactNode } from "react";
import { pageLayoutStyles } from "./pageLayoutStyles";

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <Box sx={pageLayoutStyles.containerWrapper}>
      <CssBaseline />
      {children}
    </Box>
  );
};
