import { fork } from "redux-saga/effects";
import { productWatcher } from "./products";

export function* rootSaga() {
  yield fork(productWatcher);
}
