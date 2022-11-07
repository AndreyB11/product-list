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
            (p) => p.id !== (action.payload as IProduct).id
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
            (p) => p.id !== (action.payload as IProduct).id
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
        isError: (action.payload as string).length > 0,
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
