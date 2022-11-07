import { IProduct } from "shared/models";
import { PRODUCT_ACTIONS } from "../actions/productActions";

interface ProductReducerState {
  products: IProduct[];
  isLoading: boolean;
  isError: boolean;
  error: string;
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
    case PRODUCT_ACTIONS.FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case PRODUCT_ACTIONS.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload as IProduct[],
      };
    case PRODUCT_ACTIONS.FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload as string,
      };
    case PRODUCT_ACTIONS.ADD_PRODUCT_PENDING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case PRODUCT_ACTIONS.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case PRODUCT_ACTIONS.ADD_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload as string,
      };
    case PRODUCT_ACTIONS.EDIT_PRODUCT_PENDING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case PRODUCT_ACTIONS.EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case PRODUCT_ACTIONS.EDIT_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload as string,
      };
    case PRODUCT_ACTIONS.DELETE_PRODUCT_PENDING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case PRODUCT_ACTIONS.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case PRODUCT_ACTIONS.DELETE_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload as string,
      };
    default:
      return state;
  }
};
