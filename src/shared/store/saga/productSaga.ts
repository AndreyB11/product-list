import { ProductService } from "shared/services/ProductService";
import { call, put, takeLatest } from "redux-saga/effects";
import { IProduct } from "shared/models";
import {
  PRODUCT_ACTIONS,
  fetchProducts,
  addProduct,
  editProduct,
  deleteProduct,
  fetchProductsSuccess,
  fetchProductsFailed,
  addProductFailed,
  editProductFailed,
  deleteProductFailed,
  requestAddProduct,
  requestEditProduct,
  requestDeleteProduct,
  addProductSuccess,
  editProductSuccess,
  deleteProductSuccess,
} from "../actions/productActions";

function* fetchProductsWorker(): Generator {
  try {
    yield put(fetchProducts());
    const data = yield call(ProductService.getAllProducts);
    yield put(fetchProductsSuccess(data as IProduct[]));
  } catch (err) {
    yield put(fetchProductsFailed("Could not fetch products"));
  }
}

function* addProductWorker(
  action: ReturnType<typeof requestAddProduct>
): Generator {
  try {
    yield put(addProduct());
    yield call(ProductService.addProduct, action.payload);
    yield put(addProductSuccess());
    yield call(fetchProductsWorker);
  } catch (err) {
    yield put(addProductFailed("Could not add product"));
  }
}

function* editProductWorker(
  action: ReturnType<typeof requestEditProduct>
): Generator {
  try {
    yield put(editProduct());
    yield call(ProductService.editProduct, action.payload);
    yield put(editProductSuccess());
    yield call(fetchProductsWorker);
  } catch (err) {
    yield put(editProductFailed("Could not edit product"));
  }
}

function* deleteProductWorker(
  action: ReturnType<typeof requestDeleteProduct>
): Generator {
  try {
    yield put(deleteProduct());
    yield call(ProductService.deleteProduct, action.payload);
    yield put(deleteProductSuccess());
    yield call(fetchProductsWorker);
  } catch (err) {
    yield put(deleteProductFailed("Could not delete product"));
  }
}

export function* productWatcher() {
  yield takeLatest(PRODUCT_ACTIONS.REQUEST_FETCH_PRODUCTS, fetchProductsWorker);
  yield takeLatest(PRODUCT_ACTIONS.REQUEST_ADD_PRODUCT, addProductWorker);
  yield takeLatest(PRODUCT_ACTIONS.REQUEST_EDIT_PRODUCT, editProductWorker);
  yield takeLatest(PRODUCT_ACTIONS.REQUEST_DELETE_PRODUCT, deleteProductWorker);
}
