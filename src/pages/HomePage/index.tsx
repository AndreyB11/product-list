import { Backdrop, Box, CircularProgress } from "@mui/material";
import { Header } from "components/Layout/Header";
import { PageLayout } from "components/Layout/PageLayout";
import { useModal } from "components/UI/Modals/GenericModal/GenericModalProvider";
import { ProductsTable } from "components/UI/Tables/ProductsTable";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  requestProducts,
  setError,
} from "shared/store/reducers/productReducer";
import { selectProductState } from "shared/store/selectors";

const HomePage = () => {
  const { products, isLoading, isError, error } =
    useSelector(selectProductState);
  const { openModal, closeModal } = useModal();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestProducts());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      openModal("errorModal", {
        visible: true,
        message: error,
        onCancel: () => {
          dispatch(setError(""));
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
