import React from 'react';
import Dashboard from './Dashboard';
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
                <Dashboard />
            </div>

        </div>

    )
}
export default Home;