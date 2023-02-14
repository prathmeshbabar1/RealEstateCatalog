// import React from 'react';
import React, { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { MdPhotoLibrary, MdModeEdit } from "react-icons/md";
import { HiEye } from "react-icons/hi";
import { Link } from "react-router-dom";

const AllpropertyList = () => {

    const [propertyList, updateList] = useState([])
    // const [key,getKey]=useState("")
    // const navigate=useNavigate()
    // const [sold, setUnsold] = useState(true)

    useEffect(() => {
        getPropertyList()
        // updateStatus()
    },[])

    const getPropertyList = async () => {
        const result = await fetch("https://realestate-darshan.onrender.com/properties")
        const allData = await result.json()
        updateList(allData)
    }

    const searchHandel = async (event) => {
        let key = event.target.value
        if (key) {
            let result = await fetch(`https://realestate-darshan.onrender.com/search/${key}`)
            result = await result.json()
            updateList(result)
            console.log(result)
        }
        else {
            getPropertyList()
        }
    }

    const updateStatus= async(id)=>{
        // console.log(name, price, company, category)
        let status="Unsold"
        let result = await fetch(`https://realestate-darshan.onrender.com/properties/${id}`, {
            method: "put",
            body: JSON.stringify({status}),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json()       
        console.log(result)
        // getPropertyList()
        if(result){
            getPropertyList()
            // navigate("/properties")
            // up
        }
    }
    return (

        <div className="dashboard">
            <div className="search-addProperty">
                <span className="search-bar">
                    <input className="search-input" type="text" placeholder="search PPD ID" onChange={searchHandel} />
                    <span className="border-left-line" onClick={searchHandel}><HiSearch className='search-icon' /></span>
                </span>
                <Link to={"/basic"}
                style={{textDecoration:"none"}}
                >
                <button className="add-btn">+ Add Property</button>
                </Link>
            </div>
            <div className="property-lists" >
                <table>
                    <thead>
                        <tr>
                            <td>PPD ID</td>
                            <td>Image</td>
                            <td>Property</td>
                            <td>Contact</td>
                            <td>Area</td>
                            <td>View</td>
                            <td>Status</td>
                            <td>Daysleft</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody id="scrollbox">
                        {
                            propertyList.length > 0 ?
                                propertyList.map((data, index) => {
                                    let ppid=data._id
                                    ppid=ppid.match(/\d+/g)
                                    ppid=ppid[0]
                                    return (
                                        <tr key={data._id}>
                                            <td>{`PPD${+ppid+1000}`}</td>
                                            <td className="gray-color"><MdPhotoLibrary /></td>
                                            <td>{data.property}</td>
                                            <td>{data.contact}</td>
                                            <td>{data.area}</td>
                                            <td>{data.views}</td>
                                            <td><button className="action-btn" 
                                            onClick={()=>{updateStatus(data._id)}}>
                                                {data.status}
                                            </button></td>
                                            <td>{parseInt(Math.random() *90 + 10)}</td>
                                            <td><span className="gray-color action"><HiEye className="view-icon" /><MdModeEdit /></span></td>
                                        </tr>
                                    )
                                })
                                : <tr className="no-data-msg" >
                                    <td >
                                        No Property data Found
                                    </td>
                                </tr>
                    }
                    </tbody>
                </table>


            </div>
        </div>
    )

}
export default AllpropertyList