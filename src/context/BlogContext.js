import React, { useReducer } from 'react';
import createDataContext from './createDataContext';

function blogReducer(state, action) {
  switch(action.type) {
    case 'create_blogpost':
      return [
        ...state, 
        { 
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        }
      ];
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

function createBlogPost(dispatch) {
  return function(payload, callback) {
    dispatch({ type: 'create_blogpost', payload: payload });
    if(callback) callback();
  };
}

function editBlogPost(dispatch) {
  return function(payload, callback) {
    dispatch({type: 'edit_blogpost', payload: payload});
    if(callback) callback();
  }
}

function deleteBlogPost(dispatch) {
  return function(id) {
    dispatch({ type: 'delete_blogpost', payload: id});
  };
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { 
    createBlogPost, 
    deleteBlogPost,
    editBlogPost,
  },
  [],
)