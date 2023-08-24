import { call, put, takeEvery } from "redux-saga/effects";
import API from "./../../services/API"
import * as actions from "../Action/action";
function* commonSaga() {
  yield takeEvery(
    actions.ACTION_TEST,
   );
}
export default commonSaga;