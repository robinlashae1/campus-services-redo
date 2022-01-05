import {React,useEffect, useState} from "react";
import { useParams } from "react-router-dom"
import HomeBanner from "./HomeBanner";
import BottomBorder from "./BottomBorder";

 function AllTechsPage ({servicesList}){
    const {schoolName, serviceName} = useParams();

    return(
        <div className="schoolPage">
            <HomeBanner title={`${schoolName} ${serviceName}`}/>
            <div>AllTechs</div>
        <BottomBorder/>
        </div>

    )

}
export default AllTechsPage