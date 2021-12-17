import {React} from "react";
import HomeBanner from "./HomeBanner";
import BottomBorder from "./BottomBorder";

function SchoolPage({schoolList}){

    return(
        <div className="schoolPage">
            <HomeBanner title="ALL SCHOOLS"/>
            <div className="gapDiv">filter button -L  </div>
            {schoolList.map(school=>(
                 <div className="collegeContainers">
                   <a href={`http://localhost:4000/schools/${school.name}`}><img src={school.image_url} alt={school.name} key={school.id}/></a>
                {console.log('ive been fetched')}
                </div>
                ))}
            <BottomBorder/>
        </div>
    )
}
export default SchoolPage