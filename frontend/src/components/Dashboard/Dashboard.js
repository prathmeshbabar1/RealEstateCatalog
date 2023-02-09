import React from 'react';
import AllpropertyList from './AllPropertyList';
import { HiSearch } from "react-icons/hi";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="search-addProperty">
                <span className="search-bar">
                    <input className="search-input" type="text" placeholder="search PPD ID" />
                    <span className="border-left-line"><HiSearch/></span>
                </span>
                <button className="add-btn">+ Add Property</button>
            </div>
            <AllpropertyList />
        </div>
    )
}
export default Dashboard;