import {React,useEffect, useState} from "react";
import { useParams } from "react-router-dom"
import BottomBorder from "./BottomBorder";
import HomeBanner from "./HomeBanner";

function TechProfilePage({userServiceList}) {
    const {userName,} = useParams();

    const filterByUser = userServiceList.filter(service=>(
        service.user.name === userName
    ))

    return ( 
        <div>
            <HomeBanner title={userName}/>
            {filterByUser.map(service=>(
                <div>{service.name}</div>
            ))}
            <BottomBorder/>
        </div>
    );
}

export default TechProfilePage;