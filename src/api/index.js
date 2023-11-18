import { API_URL } from '../config';

export const loginApi = async (payload) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({
      username: 'atuny0',
      password: '9uQFF1Lh',
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  return await response.json();
};

export const signupApi = async () => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({
      username: 'atuny0',
      password: '9uQFF1Lh',
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  return await response.json();
};

export const getPostsApi = async () => {
  const response = await fetch(`${API_URL}/posts`, {
    method: 'GET',
  });
  return response.json();
};

// Create a post
export const createPostApi = async (post) => {
  console.log('createPostApi - ', post);
  const response = await fetch(`${API_URL}/posts/add`, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json',
    },
  });
  return await response.json();
};

// Get a single post
export const getSinglePostApi = async (id) => {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    method: 'GET',
  });
  return await response.json();
};

// Update a post
export const updatePostApi = async (id, post) => {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json',
    },
  });
  return await response.json();
};

// Delete a post
export const deletePostApi = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
};
