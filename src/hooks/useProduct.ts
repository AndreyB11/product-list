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
  const products = selectProductState(useAppSelector((state) => state));

  const fetchProducts = () => {
    dispatch(requestFetchProducts());
  };

  const addProduct = (product: IProduct) => {
    dispatch(requestAddProduct(product));
  };

  const deleteProduct = (product: IProduct) => {
    dispatch(requestDeleteProduct(product));
  };

  const editProduct = (product: IProduct) => {
    dispatch(requestEditProduct(product));
  };

  return {
    products,
    fetchProducts,
    addProduct,
    deleteProduct,
    editProduct,
  };
};
