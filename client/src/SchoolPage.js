import {React, useEffect, useState} from "react";
import HomeBanner from "./HomeBanner";
import BottomBorder from "./BottomBorder";

function SchoolPage(){
const [schoolList, setschoolList] = useState([]);    

useEffect(() => {
    fetch("/schools")
    .then((r) => r.json())
    .then((schools) => setschoolList(schools));
}, []);
    return(
        <div className="schoolPage">
            <HomeBanner/>
            {schoolList.map((school)=>(
                 <div className="collegeContainers">
                    <img src={school.image_url} alt={school.name} />
                {console.log('ive been fetched')}
                </div>
            ))}
            {/* <schoolList/> */}
            <BottomBorder/>
        </div>
    )
}
export default SchoolPage