import {React} from "react";
import { useParams } from "react-router-dom"
import HomeBanner from "./HomeBanner";
import BottomBorder from "./BottomBorder";

 function AllTechsPage ({servicesList}){
    const {schoolName, serviceName} = useParams();
console.log({servicesList})

  const filteredBySchool = servicesList.filter(userService=>(
    userService.school.name === schoolName
    ))

    const filteredByService = filteredBySchool.filter(service=>
        service.service.name === serviceName
    )
    console.log(filteredBySchool)

    // schools/:schoolName/:serviceName/
    return(
        <div className="schoolPage">
            <HomeBanner title={`${schoolName} ${serviceName}`}/>
            <div>AllTechs</div>
            {filteredByService.map(service=>(
                //to tech profile page
                    <a href={`/${service.user.name}/${service.name}`}>
                    <div> 
                    {service.name}
                    </div>
                    </a>
                )
            )}
        <BottomBorder/>
        </div>

    )

}
export default AllTechsPage