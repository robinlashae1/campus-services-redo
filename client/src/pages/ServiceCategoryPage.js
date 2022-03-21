import {React} from "react";
import { useParams } from "react-router-dom"
import HomeBanner from "../bars/HomeBanner";
import BottomBorder from "../bars/BottomBorder";

function ServiceCategoryPage({serviceCategoryList,user}){

   const {serviceName,schoolName} = useParams();
   //${service.service_categories.name}
   const FilteredServiceCategoryList = serviceCategoryList.filter(serviceCategory=>(
       serviceCategory.service.name === serviceName
   ))
    return(
        <div className="serviceCategoryPage">
            <HomeBanner user={user} title={`${serviceName}`}/>
            <div className="colleges-center" >
              {FilteredServiceCategoryList.map((category)=>(
                <div className="categoriesContainers" id="service-categories">
            {/* to all tech page  */}
                <a href={`http://localhost:4000/schools/${schoolName}/${serviceName}/${category.name}`}><div className="services"id={`${serviceName} ${category.name}`}>{category.name}</div ></a>
            </div>
            ))}  
            </div>
            
            
        </div>
    )
}
export default ServiceCategoryPage