import {React,} from "react";
import { useParams } from "react-router-dom"
import BottomBorder from "./BottomBorder";
import HomeBanner from "./HomeBanner";
import ServiceCard from "./ServiceCard"

function SpecificService({userServiceList}) {
    const {userName,serviceName,serviceId } = useParams();

    const filterByUser = userServiceList.filter(service=>(
        service.user.name === userName
    ))
    console.log(filterByUser)
    const filteredByService = filterByUser.filter(service=>(
        service.name === serviceName
    ))
    console.log(filteredByService)
    const filteredById = filteredByService.filter(service=>(
        service.id === serviceId
    ))

console.log(filteredById)
    return ( 
        <div>
            <HomeBanner title={serviceName} />
            <div className="fullSpecificDiv">
            <div id="techProfileSpace"/>
            {filteredByService.map(service=>(
                <ServiceCard service={service}/>
            ))}
            </div><BottomBorder/>
            </div>
            
    );
}

export default SpecificService;