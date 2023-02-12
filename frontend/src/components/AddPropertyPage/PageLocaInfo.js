import React from 'react';
import "../PropertyComponent/Menubar.css"
import Menubar from '../PropertyComponent/Menubar';
import Sidenav from '../Dashboard/Sidenav';
import UpperNav from '../Dashboard/UpperNav';
import "../PropertyComponent/BasicInfo.css"
import "../Dashboard/Home.css"
import LocationInfo from '../PropertyComponent/LocationInfo';

const  PageLocationInfo= () => {

    return (
        <div className="home">
            <div className="side-nav">
                <Sidenav/>
            </div>
            <div className="display">
                <UpperNav />
                <div className='dashboard'>
                <Menubar/>
                <LocationInfo/>
                </div>
            </div>

        </div>

    )
}
export default PageLocationInfo;