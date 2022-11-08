import { useCallback } from "react";
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

  const addProduct = (product: Omit<IProduct, "id">) => {
    dispatch(requestAddProduct(product));
  };

  const deleteProduct = (product: IProduct) => {
    dispatch(requestDeleteProduct(product));
  };

  const editProduct = (product: IProduct) => {
    dispatch(requestEditProduct(product));
  };

  return {
    isError,
    isLoading,
    products,
    error,
    fetchProducts,
    addProduct,
    deleteProduct,
    editProduct,
  };
};
