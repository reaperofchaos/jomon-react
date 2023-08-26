import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import configuration from "./reducers/configuration.reducers";
import expert from "../expert/reducers/expert.reducers";
import configurationSagas from "./sagas/configuration.sagas";
import expertSagas from "../expert/sagas/expert.sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    configuration,
    expert,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

function* rootSagas() {
  yield all({
    ...configurationSagas,
    ...expertSagas,
  });
}

sagaMiddleware.run(rootSagas);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
