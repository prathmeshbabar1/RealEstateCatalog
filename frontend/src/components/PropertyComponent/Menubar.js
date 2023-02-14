import { useState } from "react";
import React from "react";
import { useEffect } from "react";

import "./Menubar.css"

const Manubar = (props)=> {

  
  //  console.log(props)
    const [state,setState] = useState('');
   function colorHandler(){
    setState( window.location.href)
   }
        //  console.log(state);
         let state1 = false;
         let state2 = false;
         let state3 = false;
         let state4 = false;
    // const [state,setState]= useState('');
    if (state==="https://real-estate-prathmesh.netlify.app/basic") {
        state1 = true;
        state2 = false;
        state3 = false;
       state4 = false;
      } else if  (state==="https://real-estate-prathmesh.netlify.app/details") {
        state1 = false;
        state2 = true;
        state3 = false;
       state4 = false;
      } else if  (state==="https://real-estate-prathmesh.netlify.app/general") {
        state1 = false;
        state2 = false;
        state3 = true;
       state4 = false;
      } else if(state==="https://real-estate-prathmesh.netlify.app/location"){
        state1 = false;
         state2 = false;
         state3 = false;
        state4 = true;
    }
// console.log(state1,state2,state3)
useEffect(() => {
    colorHandler()
  },[ props]);
    return (
        <div>
        <article className="heading">Add new Property</article>
        <article  className="manubar">
            <span className={state1 ? 'manu  a' : 'manu'}><span className={state1?'pageno b':'pageno'}>1</span> BasicInfo</span>
            <span className={state2 ? 'manu  a' : 'manu '}><span  className={state2?'pageno b':'pageno'}>2</span >Property  Detail</span>
            <span className={state3 ? 'manu  a' : 'manu '}><span className={state3?'pageno b':'pageno'}>3</span>General Info</span>
            <span className={state4? 'manu  a' : 'manu '}><span className={state4?'pageno b':'pageno'}>4</span>Location Info</span>

        </article>

        </div>
    )
}
export default Manubar;