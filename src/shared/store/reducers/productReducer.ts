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
  SET_PRODUCTS = "SET_PRODUCTS",
  SET_LOADING = "SET_LOADING",
  SET_ERROR = "SET_ERROR",
}

interface ProductAction {
  type: PRODUCT_ACTIONS;
  payload?: IProduct[] | IProduct | string | boolean;
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
    case PRODUCT_ACTIONS.SET_PRODUCTS:
      return {
        ...state,
        isError: false,
        products: action.payload as IProduct[],
      };
    case PRODUCT_ACTIONS.SET_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload as string,
      };
    case PRODUCT_ACTIONS.SET_LOADING:
      return {
        ...state,
        isError: false,
        isLoading: action.payload as boolean,
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
