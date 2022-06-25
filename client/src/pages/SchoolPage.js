import {React,useEffect,useState} from "react";
import HomeBanner from "../bars/HomeBanner";
import ServiceCard from "./ServiceCard";
import { useSelector} from 'react-redux';
import {chooseSchool, chooseService, chooseServiceCategory, setSchoolPickId} from "../slices/schoolsSlices.js"

function SchoolPage({setLoginShow,loginShow,user,onLogin,setUsername,setPassword,username,password,store}){
    const [selectedSchool, setSelectedSchool] = useState(null);
    const [serviceId,setServiceId]= useState([])
    const [servicesArray, setServicesArray] = useState(null)
    const storeState = useSelector(state => state)
    console.log(storeState)

    function query(){
          fetch('/quiz_results', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              school_id: parseInt(storeState.schools.schoolId),
              service_id: parseInt(storeState.schools.serviceId),
              service_category_id: parseInt(storeState.schools.serviceCategoryId)
            }),
          }).then((r) => {
            if (r.ok)
            { r.json().then((r) => setServicesArray(r))}
            else {
              r.json().then((err) => setServicesArray([]))
            }
            // .then(handleClose);
        }
  )
}
    
        function renderSchools(arr){
        console.log(arr)
      if (arr[0]){
        return (
          <div className="schools-container">
            {arr.map(service =>
            {return (<ServiceCard service={service} className="s"/>)}
            )}
          </div>
        )
      }
      else {
          return (
          <div className="schools-container">
            <h1>
              Sorry, no services like this are offered yet. But we are growing everyday. 
            </h1>
            <button onClick={()=> {window.location.reload()}}> Restart Search</button>
          </div>
          )
        }
    }

      function handleSchoolSearch(state){
          
        if (state.schools.schoolId.length < 1){
          return (
            <div>
              <h1>Please Choose a School</h1>
              <div className="schools-container">
                {state.schools.schoolList.map((school) =>
                      <img src={school.image_url} onClick={() => store.dispatch(chooseSchool(school.id))}
                      key={school.id}  className="collegeContainers"/>
                    )}
              </div>
            </div>
              )
        } else if (state.schools.serviceId.length < 1){
          return (
          <div>
              <h1>Please Choose a Service</h1>
                <div className="schools-container">
                  {state.schools.servicesList.map((school) => 
                    <div src={school.image_url} onClick={() => {store.dispatch(chooseService(school.id)); 
                      setServiceId(school.id)}}
                    key={school.id} value={school.id} className="services"id={`${school.name}`}>{school.name}</div >
                  )}
                </div>
            </div>
          )
        }
        else if (state.schools.serviceCategoryId.length < 1){
          const filteredCategories = state.schools.serviceCategoryList.filter(userService=>(
            userService.service_id === parseInt(serviceId)
            ))
            console.log("serviceId", serviceId)
            console.log("filteredCat", filteredCategories)

          return (
          <div>
              <h1>Please Choose a Category</h1>
              <div className="schools-container">
                    {filteredCategories.map((school) => 
                      <div onClick={() => {store.dispatch(chooseServiceCategory(school.id)); setSelectedSchool("hi")}}
                      key={school.id}  className="category">{school.name}</div>
                    )}
                </div>
            </div>
          )
        } else {
          query()
        }
      }

    return(
        <div className="schoolPage" style={{overflowX: "hidden"}}>
            <HomeBanner onLogin={onLogin} user={user} setUsername={setUsername} setPassword={setPassword} username={username} password={password} setLoginShow={setLoginShow} loginShow={loginShow} title="ALL SCHOOLS"/>
              <div className="colleges-center">
                {/* <div id="sort-bar"></div> */}
                <div id="school-render">
                      {servicesArray? renderSchools(servicesArray) : handleSchoolSearch(storeState)}
                </div>
              </div>
        </div>
    )
}
export default SchoolPage
