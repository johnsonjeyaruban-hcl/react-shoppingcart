import { takeEvery, call, put } from "redux-saga/effects";

import { FETCH_PRODUCTS, fetchSuccess, fetchFailure } from "../index";
import Axios from "axios";
export const watchGetProducts = function* () {
  console.log("inside watchGetProducts");
  yield takeEvery(FETCH_PRODUCTS, workerGetProducts);
};

function* workerGetProducts() {
  console.log("in worker prod");
  try {
    const uri = "http://localhost:3000/foods";
    const result = yield call(Axios.get, uri);
    yield put(fetchSuccess(result));
  } catch {
    yield put(fetchFailure());
  }
}
