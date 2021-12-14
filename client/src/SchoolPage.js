import {React, useEffect, useState} from "react";
import HomeBanner from "./HomeBanner";

function SchoolPage(){
const [schoolList, setschoolList] = useState([]);    

useEffect(() => {
    fetch("http://localhost:3000/schools")
    .then((r) => r.json())
    .then((schools) => setschoolList(schools));
}, []);
    return(
        <div>
            <HomeBanner/>
            {schoolList.map((school)=>{
                 <div>
                    <img src={school.image_url} alt={school.name}/>
                </div>
            })}
            <schoolList/>
        </div>
    )
}
export default SchoolPage