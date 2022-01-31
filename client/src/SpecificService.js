import {React,} from "react";
import { useParams } from "react-router-dom"
import BottomBorder from "./BottomBorder";
import HomeBanner from "./HomeBanner";

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
                <>
                <div className="techProfileDivs"/>
                    <div id="specificName">{service.name}</div>
                    <div id="specificPrice">{service.price}</div>
                    <div id="specificDescription">{service.description}</div></>
            ))}
            </div><BottomBorder/>
            </div>
            
    );
}

export default SpecificService;