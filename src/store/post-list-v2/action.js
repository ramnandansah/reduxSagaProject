// Action Name Constants
export const GET_POST_LIST_ACTION = "GET_POST_LIST_ACTION";
export const GET_POST_LIST_SUCCESS = `${GET_POST_LIST_ACTION}_SUCCESS`;
export const GET_POST_LIST_FAILURE = `${GET_POST_LIST_ACTION}_FAILURE`;

// Action Creators
export const getPostListAction = () => ({
  type: GET_POST_LIST_ACTION,
});

export const getPostListSuccessAction = (payload) => ({
  type: GET_POST_LIST_SUCCESS,
  payload: payload,
});

export const getPostListFailureAction = (payload) => ({
  type: GET_POST_LIST_FAILURE,
  payload: payload,
});
