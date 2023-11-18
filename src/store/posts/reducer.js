import {
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  RESET_UPDATE_POST_ERROR,
} from './action';

export const INITIAL_STATE = {
  limit: 0,
  posts: [],
  skip: 0,
  total: 0,
  error: '',
  createPostError: null, // true, false or null
  updatePostError: null, // true, false or null
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POST_SUCCESS:
      return { ...state, ...payload, posts: [...state.posts, ...payload.posts], error: '' };
    case GET_POST_FAILURE:
      return { ...state, error: payload.error };
    case CREATE_POST_SUCCESS:
      return { ...state, posts: [payload, ...state.posts], createPostError: false };
    case CREATE_POST_FAILURE:
      return { ...state, createPostError: payload.error };
    case UPDATE_POST_SUCCESS:
      return { ...state, updatePostError: false };
    case UPDATE_POST_FAILURE:
      return { ...state, updatePostError: payload.error };
    case RESET_UPDATE_POST_ERROR:
      return { ...state, updatePostError: null };
    default:
      return state;
  }
};

export default reducer;
