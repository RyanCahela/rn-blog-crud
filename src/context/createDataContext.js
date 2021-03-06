import React, { useReducer } from 'react';

export default function createDataContext(reducer, actions, initialState) {
  const Context = React.createContext();

  function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    //actions === { addBlogPost: function(dispatch) { return function{ dispatch({ type: 'foo' }) }}}
    const boundActions = {};
    for(let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{
        state,
        ...boundActions,
      }}>
        {children}
      </Context.Provider>
    )
  }

  return { Context, Provider };
};