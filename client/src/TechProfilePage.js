import {React,useEffect, useState} from "react";
import { useParams } from "react-router-dom"
import BottomBorder from "./BottomBorder";
import HomeBanner from "./HomeBanner";
import SearchBar from "material-ui-search-bar";

function TechProfilePage({userServiceList}) {
    const [serviceList, setServiceList] = useState([]);
    const [searchFilter, setSearchFilter] = useState(userServiceList);
    const {userName,} = useParams();

    const filterByUser = userServiceList.filter(service=>(
        service.user.name === userName
    ))

    const handleSearch = (e) => {
        const filtered = filterByUser.filter((service) => {
          return service.name.toLowerCase().includes(e)
        })
        setSearchFilter(filtered)
      }

    return ( 
        <div>
            <HomeBanner title={userName}/>
            <SearchBar className="search-bar gapDiv" onChange={handleSearch}/>
            <div className="testDiv">
            <div id="techProfileSpace"/>
            {searchFilter.map(service=>(
                <div className="techProfileDivs">{service.name}</div>
            ))}
            </div>
            <BottomBorder/>
        </div>
    );
}

export default TechProfilePage;