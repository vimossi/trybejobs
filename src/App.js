import React from 'react';
import MyProvider from './context/MyProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Todo from './pages/Todo';

function App(){
  return(
    <BrowserRouter>
      <MyProvider>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Todo" element={<Todo />} />
        </Routes>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;