import { IProduct } from "shared/models";

export enum PRODUCT_ACTIONS {
  ADD_PRODUCT = "ADD_PRODUCT",
  EDIT_PRODUCT = "EDIT_PRODUCT",
  DELETE_PRODUCT = "DELETE_PRODUCT",
  REQUEST_ADD_PRODUCT = "REQUEST_ADD_PRODUCT",
  REQUEST_EDIT_PRODUCT = "REQUEST_EDIT_PRODUCT",
  REQUEST_DELETE_PRODUCT = "REQUEST_DELETE_PRODUCT",
  REQUEST_PRODUCTS = "REQUEST_PRODUCTS",
  SET_PRODUCTS = "SET_PRODUCTS",
  SET_LOADING = "SET_LOADING",
  SET_ERROR = "SET_ERROR",
}

export const requestProducts = () => {
  return {
    type: PRODUCT_ACTIONS.REQUEST_PRODUCTS,
  };
};

export const requestAddProduct = (product: Omit<IProduct, "id">) => {
  return {
    type: PRODUCT_ACTIONS.REQUEST_ADD_PRODUCT,
    payload: product,
  };
};

export const requestEditProduct = (product: IProduct) => {
  return {
    type: PRODUCT_ACTIONS.REQUEST_EDIT_PRODUCT,
    payload: product,
  };
};

export const requestDeleteProduct = (product: IProduct) => {
  return {
    type: PRODUCT_ACTIONS.REQUEST_DELETE_PRODUCT,
    payload: product,
  };
};

export const addProduct = (product: IProduct) => {
  return {
    type: PRODUCT_ACTIONS.ADD_PRODUCT,
    payload: product,
  };
};

export const editProduct = (product: IProduct) => {
  return {
    type: PRODUCT_ACTIONS.EDIT_PRODUCT,
    payload: product,
  };
};

export const deleteProduct = (product: IProduct) => {
  return {
    type: PRODUCT_ACTIONS.DELETE_PRODUCT,
    payload: product,
  };
};

export const setError = (error: string) => {
  return {
    type: PRODUCT_ACTIONS.SET_ERROR,
    payload: error,
  };
};

export const setLoading = (loading: boolean) => {
  return {
    type: PRODUCT_ACTIONS.SET_LOADING,
    payload: loading,
  };
};

export const setProducts = (products: IProduct[]) => {
  return {
    type: PRODUCT_ACTIONS.SET_PRODUCTS,
    payload: products,
  };
};
