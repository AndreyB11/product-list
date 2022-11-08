import { useCallback, useEffect } from "react";
import { IProduct } from "shared/models";
import { useAppDispatch, useAppSelector } from "shared/store";
import {
  requestAddProduct,
  requestFetchProducts,
  requestDeleteProduct,
  requestEditProduct,
} from "shared/store/actions/products";
import { selectProductState } from "shared/store/selectors";

export const useProduct = () => {
  const dispatch = useAppDispatch();
  const { isError, isLoading, products, error } = selectProductState(
    useAppSelector((state) => state)
  );

  const fetchProducts = useCallback(() => {
    dispatch(requestFetchProducts());
  }, [dispatch]);

  const addProduct = useCallback(
    (product: Omit<IProduct, "id">) => {
      dispatch(requestAddProduct(product));
    },
    [dispatch]
  );

  const deleteProduct = useCallback(
    (product: IProduct) => {
      dispatch(requestDeleteProduct(product));
    },
    [dispatch]
  );

  const editProduct = useCallback(
    (product: IProduct) => {
      dispatch(requestEditProduct(product));
    },
    [dispatch]
  );

  const useFetchProducts = () => {
    useEffect(() => {
      fetchProducts();
    }, []);
  };

  return {
    isError,
    isLoading,
    products,
    error,
    useFetchProducts,
    fetchProducts,
    addProduct,
    deleteProduct,
    editProduct,
  };
};
