import React, { useState } from 'react';
import MyContext from './MyContext';

function MyProvider({ children }) {
  // const [token, setToken] = useState('');
  const [email, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const context = {
    // token,
    // setToken,
    email,
    setUserEmail,
    password,
    setPassword,
}
  return (
    <div>
      <MyContext.Provider value={context}>
        {children}
      </MyContext.Provider>
    </div>
  );
}

export default MyProvider;