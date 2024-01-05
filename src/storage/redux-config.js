import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import productSlice from "./reducers/productSlice";


const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  products: productSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  //   middleware: [thunk],
});

export const persistor = persistStore(store);
