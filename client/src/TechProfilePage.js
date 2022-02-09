import {React, useState,useEffect} from "react";
import { useParams } from "react-router-dom"
import BottomBorder from "./BottomBorder";
import HomeBanner from "./HomeBanner";
import ServiceCard from "./ServiceCard";
import SearchBar from "material-ui-search-bar";

function TechProfilePage({userServiceList}) {
    // const [serviceList, setServiceList] = useState([]);
    const [searchFilter, setSearchFilter] = useState(userServiceList);
    const {userName} = useParams();

    const filterByUser = userServiceList.filter(service=>(
        service.user.name === userName
    ))

    const handleSearch = (e) => {
        const filtered = filterByUser.filter((service) => {
          return service.name.toLowerCase().includes(e)
        })
        setSearchFilter(filtered)
      }

      useEffect(() => {
        setSearchFilter(userServiceList)
      },[userServiceList])

    return ( 
        <div>
            <HomeBanner title={userName} />
            <SearchBar className="search-bar gapDiv" onChange={handleSearch}/>
            <div id="techServiceSpace">
            <div id="techProfileSpace">
            <div className="userPic"/>
            </div>
            <div className="displayTechService">
            {searchFilter.map(service=>(
                <ServiceCard canEdit={false} className={"techServiceCard"} service={service}/>
            ))}
            </div></div>
            <BottomBorder/>
        </div>
    );
}

export default TechProfilePage;