import { configureStore } from "@reduxjs/toolkit";
import toDosReducer from "../features/toDos/toDosSlice";

const store = configureStore({
  reducer: {
    toDos: toDosReducer,
  },
});

export default store;
