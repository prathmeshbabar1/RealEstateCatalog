import React, { useEffect } from 'react';
import { json } from 'react-router-dom';
import AllpropertyList from './AllPropertyList';
import "./Home.css"
import Sidenav from './Sidenav';
import UpperNav from './UpperNav';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    useEffect(() => {
        if (!token) {
            navigate("/login")
        }
        console.log(token)
    }, [])
    return (
        <div className="home">
            <div className="side-nav">
                <Sidenav />
            </div>
            <div className="display">
                <UpperNav />
                <AllpropertyList />
            </div>

        </div>

    )
}
export default Home;