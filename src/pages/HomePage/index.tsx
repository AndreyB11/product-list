import { Backdrop, Box, CircularProgress } from "@mui/material";
import { Header } from "components/Layout/Header";
import { PageLayout } from "components/Layout/PageLayout";
import { ProductsTable } from "components/UI/Tables/ProductsTable";
import { useErrorModal } from "hooks/useErrorModal";
import { useProduct } from "hooks/useProduct";
import { useCallback, useEffect } from "react";

const HomePage = () => {
  const { products, isLoading, isError, error, cleanError, fetchProducts } =
    useProduct();
  const cleanAfterClose = useCallback(() => cleanError(), [cleanError]);

  useErrorModal(isError, cleanAfterClose, error);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

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
