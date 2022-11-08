import { applyMiddleware, combineReducers, createStore } from "redux";
import { productReducer } from "./reducers/products";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./saga";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  productReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

sagaMiddleware.run(rootSaga);
