import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import { Header } from "components/Layout/Header";
import { PageLayout } from "components/Layout/PageLayout";
import { ProductsTable } from "components/UI/Tables/ProductsTable";
import { useErrorModal } from "hooks/useErrorModal";
import { useProduct } from "hooks/useProduct";
import { useCallback, useEffect } from "react";
import { Style } from "shared/theme";

const homePageStyles: Style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  backdrop: {
    zIndex: 100,
  },
};

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
      <Typography fontWeight="500">{`Total Products number: ${products.length}`}</Typography>
      <Box sx={homePageStyles.container}>
        <ProductsTable products={products} />

        <Backdrop open={isLoading} sx={homePageStyles.backdrop}>
          <CircularProgress size={128} />
        </Backdrop>
      </Box>
    </PageLayout>
  );
};

export default HomePage;
