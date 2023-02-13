import React from 'react';
import "../PropertyComponent/Menubar.css"
import Menubar from '../PropertyComponent/Menubar';
import Sidenav from '../Dashboard/Sidenav';
import UpperNav from '../Dashboard/UpperNav';
import "../PropertyComponent/BasicInfo.css"
import "../Dashboard/Home.css"
import LocationInfo from '../PropertyComponent/LocationInfo';

const  PageLocationInfo= (props) => {
let property = props.property;
let area = props.area;
let contact = props.contact
    return (
        <div className="home">
            <div className="side-nav">
                <Sidenav/>
            </div>
            <div className="display">
                <UpperNav />
                <div className='dashboard'>
                <Menubar/>
                <LocationInfo property={property} area={area} contact={contact}/>
                </div>
            </div>

        </div>

    )
}
export default PageLocationInfo;