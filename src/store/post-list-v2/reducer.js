import { GET_POST_LIST_SUCCESS, GET_POST_LIST_FAILURE } from "./action";

const initialState = {
  posts: [],
  limit: 0,
  skip: 0,
  total: 0,
  error: null,
};

const reducer = (state = initialState, action) => {
  console.log("reducer - post-list-v2", action);
  const { type, payload } = action;
  switch (type) {
    case GET_POST_LIST_SUCCESS:
      return { ...state, ...payload };
    case GET_POST_LIST_FAILURE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default reducer;
