import { put, takeLatest, call } from "redux-saga/effects";
import { getPostsApi } from "../../api/index";
import {
  GET_POST_LIST_ACTION,
  getPostListFailureAction,
  getPostListSuccessAction,
} from "./action";

// Worker Saga: Fired on GET_POST_LIST_ACTION action
export function* getPostListSaga(action) {
  console.log("getPostListSaga", action);
  try {
    // api call from saga
    const response = yield call(getPostsApi);
    console.log("getPostListSaga response", response);

    yield put(getPostListSuccessAction(response));
  } catch (error) {
    // fire an action from saga
    yield put(getPostListFailureAction({ error }));
  }
}

// Watcher Saga: Watches for actions dispatched to the store, starts worker saga
export default [takeLatest(GET_POST_LIST_ACTION, getPostListSaga)];
