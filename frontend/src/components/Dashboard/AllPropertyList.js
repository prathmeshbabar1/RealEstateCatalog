// import React from 'react';
import React, { useEffect, useState } from "react";
const AllpropertyList=()=>{

    const [propertyList,updateList]=useState([])


    useEffect(()=>{
        getPropertyList()
    },[])
    
    const getPropertyList=async()=>{
        let result =await fetch("http://localhost:5000/property")
        result=await result.json()
        updateList(result)
    }









    return(
        <div className="property-lists">
            <ul>
                <li>PPD ID</li>
                <li>Image</li>
                <li>Property</li>
                <li>Contact</li>
                <li>Area</li>
                <li>View</li>
                <li>Status</li>
                <li>DaysLeft</li>
                <li>Action</li>
            </ul>
            {
                propertyList.map((data,index)=>{
                    return(
                        <ul>
                        <li>{index+1}</li>
                        <li>Image</li>
                        <li>House</li>
                        <li>9582875221</li>
                        <li>4250</li>
                        <li>View</li>
                        <li>Sold</li>
                        <li>15</li>
                        <li>Action</li>
                    </ul>
                    )
                })
            }
         
            <ul>
                <li>PPD1533</li>
                <li>Image</li>
                <li>House</li>
                <li>9582875221</li>
                <li>4250</li>
                <li>View</li>
                <li>Sold</li>
                <li>15</li>
                <li>Action</li>
            </ul>
            <ul>
                <li>PPD1233</li>
                <li>Image</li>
                <li>House</li>
                <li>9582875221</li>
                <li>4250</li>
                <li>View</li>
                <li>Sold</li>
                <li>15</li>
                <li>Action</li>
            </ul>
            <ul>
                <li>PPD1253</li>
                <li>Image</li>
                <li>House</li>
                <li>9582875221</li>
                <li>4250</li>
                <li>View</li>
                <li>Sold</li>
                <li>15</li>
                <li>Action</li>
            </ul>

        </div>

    )
}
export default AllpropertyList;