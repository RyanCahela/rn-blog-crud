import React, { useReducer } from 'react';
import createDataContext from './createDataContext';

function blogReducer(state, action) {
  switch(action.type) {
    case 'add_blogpost':
      return [...state, { title: `Blog Post #${state.length + 1}`}];
    default:
      throw new Error('action type not found in blogPost reducer');
  }
}

function addBlogPost(dispatch) {
  return function() {
    dispatch({ type: 'add_blogpost' });
  };
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  [],
)