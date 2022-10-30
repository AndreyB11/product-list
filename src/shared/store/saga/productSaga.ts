import { ProductService } from "shared/services/ProductService";
import { call, put, takeLatest } from "redux-saga/effects";
import { IProduct } from "shared/models";
import {
  PRODUCT_ACTIONS,
  addProduct,
  setError,
  editProduct,
  deleteProduct,
  setLoading,
  setProducts,
} from "../reducers/productReducer";

function* fetchProductsWorker(): Generator {
  try {
    yield put(setLoading(true));
    const data = yield call(ProductService.getAllProducts);
    yield put(setProducts(data as IProduct[]));
    yield put(setLoading(true));
  } catch (err) {
    yield put(setError("Could not fetch products"));
  }
}

function* addProductWorker(action: ReturnType<typeof addProduct>): Generator {
  try {
    yield put(setLoading(true));
    yield call(ProductService.addProduct, action.payload);
    yield put(addProduct(action.payload));
    yield put(setLoading(false));
  } catch (err) {
    yield put(setError("Could not add product"));
  }
}

function* editProductWorker(action: ReturnType<typeof editProduct>): Generator {
  try {
    yield put(setLoading(true));
    yield call(ProductService.editProduct, action.payload);
    yield put(editProduct(action.payload));
    yield put(setLoading(false));
  } catch (err) {
    yield put(setError("Could not edit product"));
  }
}

function* deleteProductWorker(
  action: ReturnType<typeof deleteProduct>
): Generator {
  try {
    yield put(setLoading(true));
    yield call(ProductService.deleteProduct, action.payload);
    yield put(deleteProduct(action.payload));
    yield put(setLoading(true));
  } catch (err) {
    yield put(setError("Could not delete product"));
  }
}

export function* productWatcher() {
  yield takeLatest(PRODUCT_ACTIONS.REQUEST_PRODUCTS, fetchProductsWorker);
  yield takeLatest(PRODUCT_ACTIONS.ADD_PRODUCT, addProductWorker);
  yield takeLatest(PRODUCT_ACTIONS.EDIT_PRODUCT, editProductWorker);
  yield takeLatest(PRODUCT_ACTIONS.DELETE_PRODUCT, deleteProductWorker);
}
