import React from 'react';
import { HiOutlineHome,HiOutlineBell,HiOutlineArrowDown,HiOutlineArrowUp,HiOutlineEye,HiOutlineTag} from "react-icons/hi";

const Sidenav=()=>{
    return(
        <>

        <h1>Logo</h1>
        <p className="blue"><span><HiOutlineHome/></span> <span>Property</span></p>
        <p><span><HiOutlineBell/></span><span>Assistace</span></p>
        <p><span><HiOutlineArrowDown/> </span><span>Recived Interest</span></p>
        <p><span><HiOutlineArrowUp/></span> <span>Recived Interest</span></p>
        <p><span><HiOutlineEye/></span><span>Recived Interest</span></p>
        <p><span><HiOutlineTag/></span><span>Recived Interest</span></p>
        
        </>

    )
}
export default Sidenav