import { Backdrop, Box, CircularProgress } from "@mui/material";
import { Header } from "components/Layout/Header";
import { PageLayout } from "components/Layout/PageLayout";
import { useModal } from "components/UI/Modals/GenericModal/GenericModalProvider";
import { ProductsTable } from "components/UI/Tables/ProductsTable";
import { useProduct } from "hooks/useProduct";
import { useEffect } from "react";

const HomePage = () => {
  const { openModal, closeModal } = useModal();
  const { products, isLoading, isError, error, fetchProducts, cleanError } =
    useProduct();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    if (isError) {
      openModal("errorModal", {
        visible: true,
        message: error!,
        onCancel: () => {
          cleanError();
          closeModal();
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, error]);

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
