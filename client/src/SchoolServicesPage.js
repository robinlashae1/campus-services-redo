import React from "react";
import { useParams } from "react-router-dom"
import HomeBanner from "./HomeBanner";
import BottomBorder from "./BottomBorder";

function SchoolServicesPage({schoolList}){
   const {schoolName} = useParams();
   console.log(schoolName)
    return(
        <div>
        <HomeBanner title={`${schoolName}`}/>
        <div className="testDiv"/>
        <BottomBorder/>
        </div>
    )
}
export default SchoolServicesPage