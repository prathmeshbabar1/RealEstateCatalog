
import React from 'react';
import BasicInfo from './appProperty/basicInfo';
import Sidenav from './appProperty/Sidenav';
import UpperNav from './appProperty/UpperNav';
import "./appProperty/Home.css"
function App() {
  return (<div className="home">
 <div className="side-nav">
      <Sidenav/>
  </div> 
  <div className="display">
      <UpperNav />
      <BasicInfo/>
  </div>

</div>
  
    )
}

export default App;
