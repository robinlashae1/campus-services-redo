import {React, useState} from "react";
import { useParams } from "react-router-dom"
import HomeBanner from "./HomeBanner";
import BottomBorder from "./BottomBorder";
import SearchBar from "material-ui-search-bar";

 function AllTechsPage ({servicesList}){
    const {schoolName, serviceName,serviceCategoryName} = useParams();
    const [searchFilter, setSearchFilter] = useState(servicesList);
console.log({servicesList})

  const filteredBySchool = servicesList.filter(userService=>(
    userService.school.name === schoolName
    ))

    const filteredByService = filteredBySchool.filter(service=>
        service.service.name === serviceName
    )

    const filteredByCategory = filteredByService.filter(service=>
        service.service_category.name === serviceCategoryName
    )
    const handleSearch = (e) => {
        const filtered = filteredByCategory.filter((service) => {
          return service.name.toLowerCase().includes(e)
        })
        setSearchFilter(filtered)
    }
    return(
        <div className="schoolPage">
            <HomeBanner title={`${serviceCategoryName}`}/>
            <SearchBar className="search-bar gapDiv" onChange={handleSearch}/>
            {searchFilter.map(service=>(
                //to specific service page
                    <a href={`/techs/${service.user.name}/${service.name}/${service.id}`}>
                    <div className="serviceTechDiv"> 
                    <div className="picturetechDiv"></div>
                    <div id="serviceNamePlace">{service.name}</div>
                    <div id="priceButton">${service.price}</div>
                    </div>
                    </a>
                )
            )}
        <BottomBorder/>
        </div>

    )

}
export default AllTechsPage