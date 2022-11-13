import { IProduct } from "shared/models";
import { PRODUCT_ACTIONS } from "../actionTypes/products";

export const requestFetchProducts = () => ({
  type: PRODUCT_ACTIONS.REQUEST_FETCH_PRODUCTS as const,
});

export const fetchProducts = () => ({
  type: PRODUCT_ACTIONS.FETCH_PRODUCTS_PENDING as const,
});

export const fetchProductsSuccess = (products: IProduct[]) => ({
  type: PRODUCT_ACTIONS.FETCH_PRODUCTS_SUCCESS as const,
  payload: products,
});

export const fetchProductsFailed = (error: string) => ({
  type: PRODUCT_ACTIONS.FETCH_PRODUCTS_FAILED as const,
  payload: error,
});

export const requestAddProduct = (product: Omit<IProduct, "id">) => ({
  type: PRODUCT_ACTIONS.REQUEST_ADD_PRODUCT as const,
  payload: product,
});

export const addProduct = () => ({
  type: PRODUCT_ACTIONS.ADD_PRODUCT_PENDING as const,
});

export const addProductSuccess = () => ({
  type: PRODUCT_ACTIONS.ADD_PRODUCT_SUCCESS as const,
});

export const addProductFailed = (error: string) => ({
  type: PRODUCT_ACTIONS.ADD_PRODUCT_FAILED as const,
  payload: error,
});

export const requestEditProduct = (product: IProduct) => ({
  type: PRODUCT_ACTIONS.REQUEST_EDIT_PRODUCT as const,
  payload: product,
});

export const editProduct = () => ({
  type: PRODUCT_ACTIONS.EDIT_PRODUCT_PENDING as const,
});

export const editProductSuccess = () => ({
  type: PRODUCT_ACTIONS.EDIT_PRODUCT_SUCCESS as const,
});

export const editProductFailed = (error: string) => ({
  type: PRODUCT_ACTIONS.EDIT_PRODUCT_FAILED as const,
  payload: error,
});

export const requestDeleteProduct = (product: IProduct) => ({
  type: PRODUCT_ACTIONS.REQUEST_DELETE_PRODUCT as const,
  payload: product,
});

export const deleteProduct = () => ({
  type: PRODUCT_ACTIONS.DELETE_PRODUCT_PENDING as const,
});

export const deleteProductSuccess = () => ({
  type: PRODUCT_ACTIONS.DELETE_PRODUCT_SUCCESS as const,
});

export const deleteProductFailed = (error: string) => ({
  type: PRODUCT_ACTIONS.DELETE_PRODUCT_FAILED as const,
  payload: error,
});

export const clearError = () => ({
  type: PRODUCT_ACTIONS.CLEAR_ERROR as const,
});
