import { IProduct } from "shared/models";

interface ProductReducerState {
  products: IProduct[];
  isLoading: boolean;
  isError: boolean;
  error: string;
}

export enum PRODUCT_ACTIONS {
  ADD_PRODUCT = "ADD_PRODUCT",
  EDIT_PRODUCT = "EDIT_PRODUCT",
  DELETE_PRODUCT = "DELETE_PRODUCT",
  REQUEST_PRODUCTS = "REQUEST_PRODUCTS",
  REQUEST_PRODUCTS_SUCCESS = "REQUEST_PRODUCTS_SUCCESS",
  REQUEST_PRODUCTS_FAIL = "REQUEST_PRODUCTS_FAIL",
  SET_ERROR = "SET_ERROR",
}

interface ProductAction {
  type: PRODUCT_ACTIONS;
  payload?: IProduct[] | IProduct | string;
}

const defaultState: ProductReducerState = {
  products: [],
  isError: false,
  isLoading: false,
  error: "",
};

export const productReducer = (
  state: ProductReducerState = defaultState,
  action: ProductAction
): ProductReducerState => {
  switch (action.type) {
    case PRODUCT_ACTIONS.REQUEST_PRODUCTS:
      return { ...state, products: [], isLoading: true, isError: false };
    case PRODUCT_ACTIONS.REQUEST_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload as IProduct[],
        isLoading: false,
        isError: false,
      };
    case PRODUCT_ACTIONS.REQUEST_PRODUCTS_FAIL:
      return {
        ...state,
        isError: true,
        error: action.payload as string,
      };
    case PRODUCT_ACTIONS.ADD_PRODUCT:
      return {
        ...state,
        isError: false,
        products: [...state.products, action.payload as IProduct],
      };
    case PRODUCT_ACTIONS.EDIT_PRODUCT:
      return {
        ...state,
        isError: false,
        products: [
          ...state.products.filter(
            (p) => p.id === (action.payload as IProduct).id
          ),
          action.payload as IProduct,
        ],
      };
    case PRODUCT_ACTIONS.DELETE_PRODUCT:
      return {
        ...state,
        isError: false,
        products: [
          ...state.products.filter(
            (p) => p.id === (action.payload as IProduct).id
          ),
        ],
      };
    case PRODUCT_ACTIONS.SET_ERROR:
      return {
        ...state,
        isError: true,
        error: action.payload as string,
      };
    default:
      return state;
  }
};

export const requestProducts = () => {
  return {
    type: PRODUCT_ACTIONS.REQUEST_PRODUCTS,
  };
};

export const requestProductsSuccess = (products: IProduct[]) => {
  return {
    type: PRODUCT_ACTIONS.REQUEST_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const requestProductsFail = (error: string) => {
  return {
    type: PRODUCT_ACTIONS.REQUEST_PRODUCTS_FAIL,
    payload: error,
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
