import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import {
  saveToLocalStorage,
  loadStateFromLocalStorage,
} from "../utils/localStorage";

const persistedState = loadStateFromLocalStorage();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
