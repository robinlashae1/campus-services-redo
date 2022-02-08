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

console.log(filteredByService[0].user)
    return ( 
        <div>
            <HomeBanner title={serviceName} />
            <div className="fullSpecificDiv">
            <div id="techProfileSpace">
                {/* {filteredByService[0].user.map(user=>(
                    <>
                        <h1>{user.name}</h1>
                        <h1>{user.description}</h1>   
                    </>
                ))} */}
            </div>
            {filteredByService.map(service=>(
                <ServiceCard className={"specificRender"} service={service}/>
            ))}
            </div><BottomBorder/>
            </div>
            
    );
}

export default SpecificService;