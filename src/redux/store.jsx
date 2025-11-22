import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterReducer";

const store = configureStore({
  reducer: counterReducer,
});

export default store;
