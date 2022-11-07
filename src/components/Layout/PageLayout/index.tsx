import { Box, CssBaseline, Container } from "@mui/material";
import { Style } from "shared/theme";

interface IProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

const pageLayoutStyles: Style = {
  containerWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  container: {
    flex: 1,
  },
};

export const PageLayout = ({ children, header }: IProps) => (
  <Box sx={pageLayoutStyles.containerWrapper}>
    {header}
    <CssBaseline />
    <Container sx={pageLayoutStyles.container}>{children}</Container>
  </Box>
);
