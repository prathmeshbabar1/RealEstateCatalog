
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './components/LoginRegister/Signin';
import Signup from './components/LoginRegister/Signup';
import Home from "./components/Dashboard/Home";
import PageBasic from './components/AddPropertyPage/PageBasic';
import PageProDetails from './components/AddPropertyPage/PagePropertDetails';
import PageGenInfo from './components/AddPropertyPage/PageGenInfo';
import PageLocationInfo from './components/AddPropertyPage/PageLocaInfo';
import PrivateComponent from './components/AddPropertyPage/PrivateComponent';
import { useState } from 'react';
function App() {

  const [property, setProperty] = useState("")
  const [contact, setcontact] = useState("")
  const [area, setArea] = useState('')
  const handleChildData = (data) => {

    setcontact(data.contact);

  }
  const handleChildData1 = (data) => {
    setArea(data.area);

  }
  const handleChildData2 = (data) => {
    setProperty(data.property);
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateComponent />}>

            <Route path='/properties' element={<Home />} />
            <Route path='/basic' element={<PageBasic onData2={handleChildData2} />} />
            <Route path='/details' element={<PageProDetails onData1={handleChildData1} />} />
            <Route path='/general' element={<PageGenInfo onData={handleChildData} />} />
            <Route path='/location' element={<PageLocationInfo property={property} area={area} contact={contact} />} />
          </Route>

          <Route path='/' element={<Signin />} />
          <Route path='/login' element={<Signin />} />
          <Route path='/register' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;