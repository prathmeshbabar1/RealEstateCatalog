import React from "react";
import "./BasicInfo.css"
// import { useState } from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom"

const LocationInfo = (props) => {
    let blueColorUrl = window.location.href
    useEffect(() => {
        // console.log( blueColorUrl);
      },[blueColorUrl]);
    let Views = Math.floor(Math.random()*100);
    // let Daysleft = Math.floor(Math.random()*100);
    let Daysleft ="6"
    const uploadPost = (e) => {
        // e.preventDefault();
        const formData = new FormData();
        formData.append("property", props.property);
        formData.append("contact", props.contact);
        formData.append("area", props.area);
        formData.append("views", Views);
        formData.append("daysleft",Daysleft)
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
          }
console.log(props.property);
        fetch("http://localhost:8080/api/property",
            {
                method: 'POST',
                body: formData
            
            }).then(res=>res.json()).then(data=>{
                console.log("success",data);
            }).catch(err=>{
                console.log("error",err);
            });


    }
// console.log(props);

    return (

        <>
            <form className="formContainer" id="formContainerForLocationInfo">

                <section className="column">
                <section className="inputSection"> <label className="WideLabel" htmlFor="Email">Email</label>
                        <input className="WideInput" type="email" id="email" name="email"
                            placeholder="Email" /></section>

                    <section className="inputSection">
                        <label className="WideLabel" htmlFor="Area">Area</label>
                        <select className="WideInput" type="text" id="Area" name="Area"
                            placeholder="Select Area" >
                            <option value="SelectArea" className="WideInput" >Select Area</option>
                            <option value="Urban"> Urban</option>
                            <option value="Rural"> Rural</option>
                        </select>
                    </section>
                  
                    <section className="inputSection"> <label className="WideLabel" htmlFor="Address">Address</label>
                        <input className="WideInput" type="text" id="Address" name="Address"
                            placeholder="Address" /></section>

                    <section className="inputSection"> <label className="WideLabel" htmlFor="Latitude">Latitude</label>
                        <input className="WideInput" type="text" id="Latitude" name="Latitude"  placeholder="Latitude"/>
                    </section>
                </section>

                <section className="column">
                    <section className="inputSection"> <label className="WideLabel" htmlFor="City">City</label>
                        <select className="WideInput" type="text" id="City" name="City"
                            placeholder="Select City" >
                            <option value="option1" className="City" >Select City</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </section>
                    <section className="inputSection"><label className="WideLabel" htmlFor="Pincode">Pincode</label>
                        <select className="WideInput" type="text" id="Pincode" name="Pincode"
                            placeholder="Select Pincode" >
                            <option value="option1" className="Ownership" >Select Pincode</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </section>
                    
                    <section className="inputSection"> <label className="WideLabel" htmlFor="Landmark">Landmark </label>
                        <input className="WideInput" type="text" id="Landmark" name="Landmark" />
                    </section>
                    
                    <section className="inputSection"> <label className="WideLabel" htmlFor="Longitude"> Longitude</label>
                        <input className="WideInput" type="text" id="Longitude" name="Longitude" />
                    </section>
                  
                   
                </section>
            </form>

            <section className="buttons" id="buttonsForLocationInfo">
            <Link to='/general' 
             style={{textDecoration:"none"}}
            >    <button className="button1">Previous</button></Link>  
                <Link to='/properties' 
                 style={{textDecoration:"none"}}
                > <button onClick={uploadPost } className="button2">Add Property</button></Link> 


            </section>
        </>
    )
}
export default LocationInfo;