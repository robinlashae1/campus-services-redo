import {React, useState,useEffect} from "react";
import { useParams } from "react-router-dom"
import BottomBorder from "./BottomBorder";
import HomeBanner from "./HomeBanner";
import ServiceCard from "./ServiceCard";
import SearchBar from "material-ui-search-bar";

function TechProfilePage({userServiceList,user}) {
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
      user? 
        <div>
          <HomeBanner title={userName} />
         
          {/* <div id="techServiceSpace"> */}
            <div id="techProfileSpace">
              <div className="userPic"/>
              <h1>{filterByUser[0].user.name}</h1>
              <h1>{filterByUser[0].user.description}</h1>
            </div>
            <div className="displayTechService">
              <SearchBar className="search-bar techSearch gapDiv" onChange={handleSearch}/>
            {searchFilter.map(service=>(
              <ServiceCard canEdit={false} className={"techServiceCard"} service={service}/>
            ))}
            </div>
          {/* </div> */}
          <BottomBorder/>
        </div>: <></>
    );
}

export default TechProfilePage;