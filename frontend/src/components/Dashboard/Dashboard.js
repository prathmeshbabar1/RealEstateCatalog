import React, { useState } from 'react';
import AllpropertyList from './AllPropertyList';
import { HiSearch } from "react-icons/hi";

const Dashboard = () => {
const [searchKey,saveKey]=useState("")
const [searchData,getData]=useState([])
const searchHandel=async()=>{
    if(searchKey){
        if(searchKey){
            let result=await fetch(`https://realestatecatalog.onrender.com/search/${searchKey}`)
            result=await result.json()
            getData(result)
            console.log(result)
        }

    }
}

    return (
        <div className="dashboard">
            <div className="search-addProperty">
                <span className="search-bar">
                    <input className="search-input" type="text" placeholder="search PPD ID" onChange={(e)=>{saveKey(e.target.value)}}/>
                    <span className="border-left-line" onClick={searchHandel}><HiSearch className='search-icon'/></span>
                </span>
                <button className="add-btn">+ Add Property</button>
            </div>
            <AllpropertyList searchData={searchData} />
        </div>
    )
}
export default Dashboard;