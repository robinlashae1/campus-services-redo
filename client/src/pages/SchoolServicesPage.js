import {React} from "react";
import { useParams } from "react-router-dom"
import HomeBanner from "../bars/HomeBanner";
import BottomBorder from "../bars/BottomBorder";

function SchoolServicesPage({servicesList,user}){
   const {schoolName} = useParams();

    return(
        <div>
        <HomeBanner user={user} title={`${schoolName}`}/>
        <div >
            <div className="colleges-center">
              {servicesList.map((service)=>(
            //to service category page 
            <a href={`http://localhost:4000/schools/${schoolName}/${service.name}`}><div className="services"id={`${service.name}`}>{service.name}</div ></a>
        ))}  
            </div>
        
        
        </div>
        </div>
    )
}
export default SchoolServicesPage