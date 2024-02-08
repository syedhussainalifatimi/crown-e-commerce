import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";
import logger from "redux-logger";

const middlewares = [logger];
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares)
});

export default store;
