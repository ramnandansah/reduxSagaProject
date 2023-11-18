// Action Name Constants
export const SIGN_UP_ACTION = 'SIGN_UP_ACTION';
export const SIGN_UP_SUCCESS = `${SIGN_UP_ACTION}_SUCCESS`;
export const SIGN_UP_FAILURE = `${SIGN_UP_ACTION}_FAILURE`;

export const LOG_IN_ACTION = 'LOG_IN_ACTION';
export const LOG_IN_SUCCESS = `${LOG_IN_ACTION}_SUCCESS`;
export const LOG_IN_FAILURE = `${LOG_IN_ACTION}_FAILURE`;

export const LOG_OUT_ACTION = 'LOG_OUT_ACTION';
export const LOG_OUT_SUCCESS = `${LOG_OUT_ACTION}_SUCCESS`;

// Action Creators
export const signUpAction = (payload) => ({
  type: SIGN_UP_ACTION,
  payload: payload,
});

export const signUpSuccessAction = (payload) => ({
  type: SIGN_UP_SUCCESS,
  payload: payload,
});

export const signUpFailureAction = (payload) => ({
  type: SIGN_UP_FAILURE,
  payload: payload,
});

export const logInAction = (payload) => ({
  type: LOG_IN_ACTION,
  payload: payload,
});

export const logInSuccessAction = (payload) => ({
  type: LOG_IN_SUCCESS,
  payload: payload,
});

export const logInFailureAction = (payload) => ({
  type: LOG_IN_FAILURE,
  payload: payload,
});

export const logOutAction = () => ({
  type: LOG_OUT_ACTION,
});

export const logOutSuccessAction = () => ({
  type: LOG_OUT_SUCCESS,
});
