import { call, put, takeLatest } from "redux-saga/effects";
import { type PayloadAction } from "@reduxjs/toolkit";
import { fetch } from "../../utils/helpers/fetch";
import { type AxiosResponse } from "axios";
import { type AxiosPayload } from "../../utils/types/payload.types";
import { Expert } from "../types";
import {
  addExperts,
  createExpert,
  getAllExperts,
  getExpertById,
} from "../reducers/expert.reducers";

function* createNewExpert(action: PayloadAction<{ expert: Expert }>) {
  yield "hello";
}

function* fetchExperts() {
  console.log("fetching experts");
  const payload: AxiosPayload = {
    method: "get",
    action: getAllExperts.type,
    url: "http://localhost:8092/author/",
  };
  const response: AxiosResponse<Expert[]> = yield call(fetch, payload);
  console.log("response", response);
  yield put(addExperts(response.data));
}

function* fetchExpertById(action: PayloadAction<{ id: number }>) {
  yield "hello";
}

const conferenceSagas = [
  takeLatest(getAllExperts.type, fetchExperts),
  takeLatest(getExpertById.type, fetchExpertById),
  takeLatest(createExpert.type, createNewExpert),
];

export default conferenceSagas;
