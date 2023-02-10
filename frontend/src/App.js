import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './components/LoginRegister/Signin';
import Signup from './components/LoginRegister/Signup';
function App() {
  return (
    <>
    {/* <Signin/>
    <Signup/> */}
      { <BrowserRouter>
        <Routes>
           <Route path="/login" element={ <Signin /> } /> 
          <Route path='/' element={ <Signup /> } />
        </Routes>
      </BrowserRouter> }
    </>
  );
}

export default App;