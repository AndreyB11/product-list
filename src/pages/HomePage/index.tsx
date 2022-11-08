import { Backdrop, Box, CircularProgress } from "@mui/material";
import { Header } from "components/Layout/Header";
import { PageLayout } from "components/Layout/PageLayout";
import { ProductsTable } from "components/UI/Tables/ProductsTable";
import { useErrorModal } from "hooks/useErrorModal";
import { useProduct } from "hooks/useProduct";

const HomePage = () => {
  const { products, isLoading, isError, error, useFetchProducts, cleanError } =
    useProduct();

  useFetchProducts();

  useErrorModal(isError, () => cleanError(), error);

  return (
    <PageLayout header={<Header />}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <ProductsTable products={products} />

        <Backdrop
          open={isLoading}
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress size={128} />
        </Backdrop>
      </Box>
    </PageLayout>
  );
};

export default HomePage;
