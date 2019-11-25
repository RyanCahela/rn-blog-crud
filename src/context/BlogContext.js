import React, { useReducer } from 'react';
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

function blogReducer(state, action) {
  switch(action.type) {
    case 'get_blogposts':
      return action.payload;
    case 'edit_blogpost':
      return state.map((blogPost) => {
        if(blogPost.id === action.payload.id) return action.payload;
        return blogPost;
      })
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      throw new Error('action type not found in blogPost reducer');
  }
}

function getBlogPosts(dispatch) {
  return async function() {
    const response = await jsonServer.get('/blogposts');
    dispatch({ type: 'get_blogposts', payload: response.data })
  }
}

function createBlogPost(dispatch) {
  return async function({ title, content }, callback) {
    jsonServer.post('/blogposts', { title, content })
    if(callback) callback();
  };
}

function editBlogPost(dispatch) {
  return function({ title, content, id }, callback) {
    jsonServer.patch(`/blogposts/${id}`, { title, content })
    dispatch({type: 'edit_blogpost', payload: { title, content }});
    if(callback) callback();
  }
}

function deleteBlogPost(dispatch) {
  return async function(id) {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: 'delete_blogpost', payload: id});
  };
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { 
    createBlogPost, 
    deleteBlogPost,
    editBlogPost,
    getBlogPosts
  },
  [],
)