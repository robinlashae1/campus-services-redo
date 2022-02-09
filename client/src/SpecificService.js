import {React,useEffect} from "react";
import { useParams } from "react-router-dom"
import BottomBorder from "./BottomBorder";
import HomeBanner from "./HomeBanner";
import ServiceCard from "./ServiceCard"

function SpecificService({userServiceList,user}) {
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

    return (
        user?
        <div>
            <HomeBanner title={serviceName} />
            <div className="fullSpecificDiv"> 
            <a href={`http://localhost:4000/techs/${userName}`}><div id="techProfileSpace">
                
                <div className="userPic"/>
                <h1>{filteredByService[0].user.name}</h1>
                <h1>{filteredByService[0].user.description}</h1>
            </div></a>
            {filteredByService.map(service=>(
                <ServiceCard className={"specificRender"} service={service}/>
            ))}
            </div><BottomBorder/>
            </div>:
            <div>
            <HomeBanner title={serviceName} />
            <div className="fullSpecificDiv">
            <div id="techProfileSpace">
            <div className="loadingDiv"/>
            </div>
            {filteredByService.map(service=>(
                <ServiceCard className={"specificRender"} service={service}/>
            ))}
            </div><BottomBorder/>
            </div>
            
    );
}

export default SpecificService;