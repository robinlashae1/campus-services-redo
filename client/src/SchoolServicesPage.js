import React from "react";
import { useParams } from "react-router-dom"
import HomeBanner from "./HomeBanner";
import BottomBorder from "./BottomBorder";

function SchoolServicesPage({schoolList, servicesList}){
   const {schoolName} = useParams();
   console.log(schoolName)
    return(
        <div>
        <HomeBanner title={`${schoolName}`}/>
        
        {servicesList.map((service)=>(
            <a href=""><div className="services"id={`${service.name}`}>{service.name}</div ></a>
        ))}
        <div className="testDiv"/>
        <BottomBorder/>
        </div>
    )
}
export default SchoolServicesPage