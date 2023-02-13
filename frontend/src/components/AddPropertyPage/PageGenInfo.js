import React from 'react';
import Menubar from '../PropertyComponent/Menubar';
import "../PropertyComponent/Menubar.css"
import Sidenav from '../Dashboard/Sidenav';
import UpperNav from '../Dashboard/UpperNav';
import GeneralInfo from '../PropertyComponent/GeneralInfo';
import "../PropertyComponent/BasicInfo.css"
import "../Dashboard/Home.css"
const  PageGenInfo= (props) => {
    const handleChildData = (data)=>{
        props.onData({ contact: data.contact });
    }
    return (
        <div className="home">
            <div className="side-nav">
                <Sidenav/>
            </div>
            <div className="display">
                <UpperNav />
                <div className='dashboard'>
                <Menubar/>
                <GeneralInfo onData={handleChildData}/>
                </div>
            </div>

        </div>

    )
}
export default PageGenInfo;