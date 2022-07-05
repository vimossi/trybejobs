import React, { useState } from 'react';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [token, setToken] = useState('');

  const context = {
    token,
    setToken,
}
  return (
    <MyContext.Provider value={context}>
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;