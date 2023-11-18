// Action Name Constants
export const GET_POST_ACTION = 'GET_POST_ACTION';
export const GET_POST_SUCCESS = `${GET_POST_ACTION}_SUCCESS`;
export const GET_POST_FAILURE = `${GET_POST_ACTION}_FAILURE`;

export const CREATE_POST_ACTION = 'CREATE_POST_ACTION';
export const CREATE_POST_SUCCESS = `${CREATE_POST_ACTION}_SUCCESS`;
export const CREATE_POST_FAILURE = `${CREATE_POST_ACTION}_FAILURE`;

export const UPDATE_POST_ACTION = 'UPDATE_POST_ACTION';
export const UPDATE_POST_SUCCESS = `${UPDATE_POST_ACTION}_SUCCESS`;
export const UPDATE_POST_FAILURE = `${UPDATE_POST_ACTION}_FAILURE`;
export const RESET_UPDATE_POST_ERROR = `RESET_UPDATE_POST_ERROR`;

// Action Creators
export const getPostAction = () => ({
  type: GET_POST_ACTION,
});

export const getPostSuccessAction = (payload) => ({
  type: GET_POST_SUCCESS,
  payload: payload,
});

export const getPostFailureAction = (payload) => ({
  type: GET_POST_FAILURE,
  payload: payload,
});

export const createPostAction = (payload) => ({
  type: CREATE_POST_ACTION,
  payload: payload,
});

export const createPostSuccessAction = (payload) => ({
  type: CREATE_POST_SUCCESS,
  payload: payload,
});

export const createPostFailureAction = (payload) => ({
  type: CREATE_POST_FAILURE,
  payload: payload,
});

export const updatePostAction = (payload) => ({
  type: UPDATE_POST_ACTION,
  payload: payload,
});

export const updatePostSuccessAction = (payload) => ({
  type: UPDATE_POST_SUCCESS,
  payload: payload,
});

export const updatePostFailureAction = (payload) => ({
  type: UPDATE_POST_FAILURE,
  payload: payload,
});

export const resetUpdatePostError = () => ({
  type: RESET_UPDATE_POST_ERROR,
});
