import { applyMiddleware, combineReducers, createStore } from "redux";
import { productReducer } from "./reducers/productReducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
