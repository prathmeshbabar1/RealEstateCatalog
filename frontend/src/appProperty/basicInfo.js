import { useReducer, useState } from "react";
import React from "react";
import "./basicInfo.css"
const BasicInfo = ()=> {

    return (
        <div>
        <article className="heading">Add new Property</article>
        <article  className="manubar">
            <span className="manu" id="manu1"><span className="pageno1">1</span> BasicInfo</span>
            <span className="manu"><span  className="pageno">2</span >Property  Detail</span>
            <span className="manu"><span className="pageno">3</span>General Info</span>
            <span className="manu"><span className="pageno">4</span>Location Info</span>

        </article>

        </div>
    )
}
export default BasicInfo;