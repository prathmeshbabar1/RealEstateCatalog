import React from 'react';
import AllpropertyList from './AllPropertyList';
import "./Home.css"
import Sidenav from './Sidenav';
import UpperNav from './UpperNav';

const Home = () => {

    return (
        <div className="home">
            <div className="side-nav">
                <Sidenav/>
            </div>
            <div className="display">
                <UpperNav />
                <AllpropertyList/>
            </div>

        </div>

    )
}
export default Home;