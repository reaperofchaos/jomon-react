import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import configuration from './reducers/configuration.reducers';
import configurationSagas from './sagas/configuration.sagas';


const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
  reducer: {
    configuration,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(configurationSagas);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;