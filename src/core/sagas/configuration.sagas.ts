/* eslint-disable prettier/prettier */
import {
  getAuthorized,
  setIsAuthorized
} from '../reducers/configuration.reducers';
import { put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { LogInPayload } from '../types/payload.types';

function* logIn(action: PayloadAction<LogInPayload>) {
  const { user, password } = action.payload;
  console.log('action.payload', action.payload);
  console.log('Logging in');
  yield put(setIsAuthorized(true));
}

export default function* configurationSagas() {
  yield takeLatest(getAuthorized.type, logIn);
}
