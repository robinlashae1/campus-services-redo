import {React} from "react";
import { useParams } from "react-router-dom"
import HomeBanner from "./HomeBanner";
import BottomBorder from "./BottomBorder";

function SchoolServicesPage({servicesList}){

   const {schoolName} = useParams();

    return(
        <div>
        <HomeBanner title={`${schoolName}`}/>
        <div className="testDiv">
        {servicesList.map((service)=>(
            //to service category page 
            <a href={`http://localhost:4000/schools/${schoolName}/${service.name}`}><div className="services"id={`${service.name}`}>{service.name}</div ></a>
        ))}
        
        </div><div className="testDiv"/>
        <BottomBorder/>
        </div>
    )
}
export default SchoolServicesPage