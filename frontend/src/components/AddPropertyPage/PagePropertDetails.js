import React from 'react';
import Menubar from '../PropertyComponent/Menubar';
import PropertyDetails from '../PropertyComponent/propertyDetails';
import "../PropertyComponent/Menubar.css"
import Sidenav from '../Dashboard/Sidenav';
import UpperNav from '../Dashboard/UpperNav';
import "../PropertyComponent/BasicInfo.css"
import "../Dashboard/Home.css"


const  PageProDetails= (props) => {
    const handleChildData1 = (data)=>{
        props.onData1({ area: data.area });
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
                <PropertyDetails onData1={handleChildData1}/>
                </div>
            </div>

        </div>

    )
}
export default PageProDetails;