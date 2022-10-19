import { Container } from "@mui/material";
import { Header } from "components/Layout/Header";
import { PageLayout } from "components/Layout/PageLayout";
import { globalStyles } from "shared/theme";

const HomePage = () => {
  return (
    <PageLayout>
      <Header />
      <Container sx={globalStyles.container}>Home Page</Container>
    </PageLayout>
  );
};

export default HomePage;
