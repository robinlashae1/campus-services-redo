import {React} from "react";
import { useParams } from "react-router-dom"
import HomeBanner from "./HomeBanner";
import BottomBorder from "./BottomBorder";

function ServiceCategoryPage({serviceCategoryList}){

   const {serviceName,schoolName} = useParams();
   //${service.service_categories.name}
   const FilteredServiceCategoryList = serviceCategoryList.filter(serviceCategory=>(
       serviceCategory.service.name === serviceName
   ))
    return(
        <div className="serviceCategoryPage">
            <HomeBanner title={`${serviceName}`}/>
            {FilteredServiceCategoryList.map((category)=>(
                <div className="categoriesContainers">
            {/* to all tech page  */}
                <a href={`http://localhost:4000/schools/${schoolName}/${serviceName}/${category.name}`}><div className="services"id={`${serviceName} ${category.name}`}>{category.name}</div ></a>
            </div>
            ))}
            <BottomBorder/>
        </div>
    )
}
export default ServiceCategoryPage