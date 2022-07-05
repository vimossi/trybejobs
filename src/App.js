import React from 'react';
import MyProvider from './context/MyProvider';
import ToDo from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(){
  return(
    <BrowserRouter>
      <MyProvider>
        <Routes>
          <Route path="/" element={<ToDo />} />
        </Routes>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;