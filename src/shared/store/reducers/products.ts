import { IProduct } from "shared/models";
import * as productActions from "../actions/products";
import { PRODUCT_ACTIONS } from "../actionTypes/products";
import { ActionTypes } from "../types";

interface ProductReducerState {
  products: IProduct[];
  isLoading: boolean;
  isError: boolean;
  error?: string;
}

const defaultState: ProductReducerState = {
  products: [],
  isError: false,
  isLoading: false,
};

export const productReducer = (
  state: ProductReducerState = defaultState,
  action: ActionTypes<typeof productActions>
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
        products: action.payload,
      };
    case PRODUCT_ACTIONS.FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
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
        error: action.payload,
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
        error: action.payload,
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
        error: action.payload,
      };
    default:
      return state;
  }
};
