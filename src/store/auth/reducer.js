import { localStorageUtils } from "../../utils";
import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
  LOG_OUT_SUCCESS,
} from "./action";

export const DEFAULT_STATE = {
  token: null,
  verified: false,
  user: {},
};

export const INITIAL_STATE = {
  ...DEFAULT_STATE,
  token: localStorageUtils.getItem(localStorageUtils.TOKEN_KEY),
  user: localStorageUtils.getItem(localStorageUtils.USER_KEY) || {},
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  console.log("reducer", { type, payload });
  switch (type) {
    case SIGN_UP_SUCCESS:
      return { ...state, ...{ ...payload, verified: true } };
    case SIGN_UP_FAILURE:
      return { ...DEFAULT_STATE, verified: false };
    case LOG_IN_SUCCESS:
      return { ...state, ...{ ...payload, verified: true } };
    case LOG_IN_FAILURE:
      return { ...DEFAULT_STATE, verified: false };
    case LOG_OUT_SUCCESS:
      return { ...DEFAULT_STATE, verified: false };
    default:
      return state;
  }
};

export default reducer;
