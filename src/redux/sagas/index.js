import { watchGetProducts } from './products';
// export default function* () {
//     console.log('inside saga index')
//     yield [
//       watchGetUsers()
//     ]
//   }
import { takeEvery, call, put } from "redux-saga/effects";

import { FETCH_PRODUCTS, fetchSuccess, fetchFailure } from "../index";
import Axios from "axios";
export default function* () {
    console.log('inside saga index')
    yield takeEvery(FETCH_PRODUCTS, workerGetProducts);
}

function* workerGetProducts() {
    console.log("in worker prod");
    try {
      const uri = "http://localhost:3333/foods";
      const result = yield call(Axios.get, uri);

      let responseObject = result.data;
        let checkResponseObject = responseObject?.length > 0;
        if (checkResponseObject === true) {
          yield put(fetchSuccess(responseObject));
        }
      
    } catch {
      yield put(fetchFailure());
    }
  }