import { takeEvery } from "redux-saga/effects";
import * as CONSTANTS from "../modules/files/constants";
import apiCall from "../api/apiCall";

const doGetAllFiles = apiCall({
  type: CONSTANTS.GET_ALL_FILES,
  isGhostApi: true,
  method: "post",
  path: "ghost/articles/search",
});

export default function* rootSaga() {
  yield takeEvery(CONSTANTS.GET_ALL_FILES, doGetAllFiles);
}
