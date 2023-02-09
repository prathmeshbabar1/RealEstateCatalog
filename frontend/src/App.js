
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './components/LoginRegister/Signin';
import Signup from './components/LoginRegister/Signup';
import Home from "./components/Home";
function App() {
  return (
    <>
    {/* <Signin/>
    <Signup/> */}
     <Home/>
      { <BrowserRouter>
        <Routes>

          { <Route path="/login" element={ <Signin /> } /> }
          <Route path='/register' element={ <Signup /> } />
        </Routes>
      </BrowserRouter> }
    </>
  );
}

export default App;