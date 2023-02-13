import React, { useState } from 'react';
import { BsPerson, BsChevronDown } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


const UpperNav = () => {
    const navigate=useNavigate()
    const [log, setLogout] = useState(false)
    const handleLog=()=>{
        localStorage.removeItem("token");
        navigate("/login")
    }
    return (
        <>
            <div className="upper-nav">
                <p>USER ID:O2PPD125</p>
                <p className='account'>
                    <span>
                        <span className='account-icon'><BsPerson /></span>
                        <span> USER Name</span>
                        <span><BsChevronDown onClick={() => {setLogout(true) }} /></span>
                    </span>
                    {log && <span className='logout-option' style={{flexDirection:"row"}} onClick={()=>{setLogout(false);handleLog()}} >logout</span>}
                </p>
            </div>

        </>

    )
}
export default UpperNav