import { IProduct } from "shared/models";

export enum PRODUCT_ACTIONS {
  REQUEST_FETCH_PRODUCTS = "REQUEST_FETCH_PRODUCTS",
  FETCH_PRODUCTS_PENDING = "FETCH_PRODUCTS_PENDING",
  FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_FAILED = "FETCH_PRODUCTS_FAILED",

  REQUEST_ADD_PRODUCT = "REQUEST_ADD_PRODUCT",
  ADD_PRODUCT_PENDING = "ADD_PRODUCT_PENDING",
  ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS",
  ADD_PRODUCT_FAILED = "ADD_PRODUCT_FAILED",

  REQUEST_EDIT_PRODUCT = "REQUEST_EDIT_PRODUCT",
  EDIT_PRODUCT_PENDING = "EDIT_PRODUCT_PENDING",
  EDIT_PRODUCT_SUCCESS = "EDIT_PRODUCT_SUCCESS",
  EDIT_PRODUCT_FAILED = "EDIT_PRODUCT_FAILED",

  REQUEST_DELETE_PRODUCT = "REQUEST_DELETE_PRODUCT",
  DELETE_PRODUCT_PENDING = "DELETE_PRODUCT_PENDING",
  DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS",
  DELETE_PRODUCT_FAILED = "DELETE_PRODUCT_FAILED",
}

export const requestFetchProducts = () => ({
  type: PRODUCT_ACTIONS.REQUEST_FETCH_PRODUCTS,
});

export const fetchProducts = () => ({
  type: PRODUCT_ACTIONS.FETCH_PRODUCTS_PENDING,
});

export const fetchProductsSuccess = (products: IProduct[]) => ({
  type: PRODUCT_ACTIONS.FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailed = (error: string) => ({
  type: PRODUCT_ACTIONS.FETCH_PRODUCTS_FAILED,
  payload: error,
});

export const requestAddProduct = (product: IProduct) => ({
  type: PRODUCT_ACTIONS.REQUEST_ADD_PRODUCT,
  payload: product,
});

export const addProduct = () => ({
  type: PRODUCT_ACTIONS.ADD_PRODUCT_PENDING,
});

export const addProductSuccess = () => ({
  type: PRODUCT_ACTIONS.ADD_PRODUCT_SUCCESS,
});

export const addProductFailed = (error: string) => ({
  type: PRODUCT_ACTIONS.ADD_PRODUCT_FAILED,
  payload: error,
});

export const requestEditProduct = (product: IProduct) => ({
  type: PRODUCT_ACTIONS.REQUEST_EDIT_PRODUCT,
  payload: product,
});

export const editProduct = () => ({
  type: PRODUCT_ACTIONS.EDIT_PRODUCT_PENDING,
});

export const editProductSuccess = () => ({
  type: PRODUCT_ACTIONS.EDIT_PRODUCT_SUCCESS,
});

export const editProductFailed = (error: string) => ({
  type: PRODUCT_ACTIONS.EDIT_PRODUCT_FAILED,
  payload: error,
});

export const requestDeleteProduct = (product: IProduct) => ({
  type: PRODUCT_ACTIONS.REQUEST_DELETE_PRODUCT,
  payload: product,
});

export const deleteProduct = () => ({
  type: PRODUCT_ACTIONS.DELETE_PRODUCT_PENDING,
});

export const deleteProductSuccess = () => ({
  type: PRODUCT_ACTIONS.DELETE_PRODUCT_SUCCESS,
});

export const deleteProductFailed = (error: string) => ({
  type: PRODUCT_ACTIONS.DELETE_PRODUCT_FAILED,
  payload: error,
});
