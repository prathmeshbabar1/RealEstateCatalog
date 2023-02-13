import React, { useState } from 'react';
import { BsPerson, BsChevronDown } from "react-icons/bs";

const UpperNav = () => {
    const [log, setLogout] = useState(false)
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
                    {log && <span className='logout-option' style={{flexDirection:"row"}} onClick={()=>{setLogout(false)}} >logout</span>}
                </p>
            </div>

        </>

    )
}
export default UpperNav