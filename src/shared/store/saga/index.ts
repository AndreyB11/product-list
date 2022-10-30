import { fork } from "redux-saga/effects";
import { productWatcher } from "./productSaga";

export function* rootSaga() {
  yield fork(productWatcher);
}
