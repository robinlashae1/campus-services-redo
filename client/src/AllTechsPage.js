import {React, useState,useEffect} from "react";
import { useParams } from "react-router-dom"
import HomeBanner from "./HomeBanner";
import BottomBorder from "./BottomBorder";
import SearchBar from "material-ui-search-bar";
import ServiceCard from "./ServiceCard"

 function AllTechsPage ({servicesList}){
    const {schoolName, serviceName,serviceCategoryName} = useParams();
    const [searchFilter, setSearchFilter] = useState(servicesList);

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
    useEffect(() => {
        setSearchFilter(filteredByCategory)
      },[filteredByCategory])
      
    
        if (filteredByCategory < 1){
           return(
            <div className="schoolPage">
            <HomeBanner title={`${serviceCategoryName}`}/>
            <SearchBar className="search-bar gapDiv" onChange={handleSearch}/>
               <h1>Sorry, there a No services here yet.<br/>
                Be sure to check back soon, We are growing everyday!</h1>
                <BottomBorder/>
            </div>
           )
        } else{
            return(
              <div className="schoolPage">
            <HomeBanner title={`${serviceCategoryName}`}/>
            <SearchBar className="search-bar gapDiv" onChange={handleSearch}/>
            {searchFilter.map(service=>(
                //to specific service page
                    <a href={`/techs/${service.user.name}/${service.name}/${service.id}`}>
                    <ServiceCard canEdit={false} className={"serviceCard"} service={service}/>
                    </a>
                )
            )}
        <BottomBorder/>
        </div>  
            )
        }
        }
export default AllTechsPage