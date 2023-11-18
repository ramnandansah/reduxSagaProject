import { put, takeLatest, call } from "redux-saga/effects";
import { loginApi, signupApi } from "../../api/index";
import {
  LOG_IN_ACTION,
  logInSuccessAction,
  logInFailureAction,
  SIGN_UP_ACTION,
  signUpFailureAction,
  signUpSuccessAction,
  LOG_OUT_ACTION,
  logOutSuccessAction,
} from "./action";
import { localStorageUtils } from "../../utils";

export function* logInSaga(action) {
  console.log("logInSaga action", action);
  const payload = action.payload;
  try {
    // api call from saga
    const response = yield call(loginApi, payload);
    console.log("logInSaga response", response);
    const {
      id,
      email,
      gender,
      firstName,
      lastName,
      image,
      token,
      message,
      username,
    } = response;
    if (message) {
      yield put(logInFailureAction(message));
    } else {
      // Set Data To User
      const user = {
        id,
        email,
        gender,
        image,
        firstName,
        lastName,
        username: payload.username,
      };

      // Set Data To Local Storage
      localStorageUtils.setItem(localStorageUtils.TOKEN_KEY, token);
      localStorageUtils.setItem(localStorageUtils.USER_KEY, user);

      // Set Data To Redux
      yield put(
        logInSuccessAction({
          token,
          user,
        })
      );
    }
  } catch (error) {
    // fire an action from saga
    yield put(logInFailureAction(error));
  }
}

export function* signUpSaga({ payload }) {
  try {
    const response = yield call(signupApi, payload);
    const { id, image, token, message } = response;
    if (message) {
      yield put(signUpFailureAction(response.message));
    } else {
      // Set Data To User
      const user = {
        id,
        image,
        email: payload.email,
        gender: payload.gender,
        username: payload.username,
        firstName: payload.firstName,
        lastName: payload.lastName,
      };

      // Set Data To Local Storage
      localStorageUtils.setItem(localStorageUtils.TOKEN_KEY, token);
      localStorageUtils.setItem(localStorageUtils.USER_KEY, user);

      // Set Data To Redux
      yield put(
        signUpSuccessAction({
          token,
          user,
        })
      );
    }
  } catch (error) {
    yield put(signUpFailureAction(error));
  }
}

export function* logoutSaga() {
  // Clear Data From Local Storage
  localStorageUtils.clearAll();
  // Clear Data From Redux
  yield put(logOutSuccessAction());
}

export default [
  takeLatest(LOG_IN_ACTION, logInSaga),
  takeLatest(SIGN_UP_ACTION, signUpSaga),
  takeLatest(LOG_OUT_ACTION, logoutSaga),
];
