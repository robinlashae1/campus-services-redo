import {React,useEffect,useState} from "react";
import HomeBanner from "../bars/HomeBanner";
import ServiceCard from "./ServiceCard";
import { useSelector} from 'react-redux';
import {chooseSchool, chooseService, chooseServiceCategory, setSchoolPickId} from "../slices/schoolsSlices.js"

function SchoolPage({setLoginShow,loginShow,user,onLogin,setUsername,setPassword,username,password,store}){
    const [selectedSchool, setSelectedSchool] = useState(null);
    const [serviceId,setServiceId]= useState([])
    const storeState = useSelector(state => state)

    
    
        function renderSchools(state){
          console.log(state)
        const filteredBySchools = state.schools.userServiceList.filter( services => (
          services.school.name == storeState.schools.schoolName 
         )) 
         const filteredSer = filteredBySchools.filter( services => (
          services.service.name == storeState.schools.servicePick 
         )) 
         const filteredCat = filteredSer.filter( services => (
          services.service_category.name == storeState.schools.serviceCategoryPick
         ))

      if (filteredCat[0]){
        return (
          <div className="schools-container">
            {filteredCat.map(service =>
              {return <ServiceCard service={service} className="s"/>
            })}
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
        const filteredCategories = storeState.schools.serviceCategoryList.filter(userService=>(
          userService.service.id === parseInt(serviceId)
          ))
          
        if (state.schools.schoolName.length < 1){
          return (
            <div>
              <h1>Please Choose a School</h1>
              <div className="schools-container">
                {state.schools.schoolList.map((school) =>
                      <img src={school.image_url} onClick={() => store.dispatch(chooseSchool(school.name))}
                      key={school.id}  className="collegeContainers"/>
                    )}
              </div>
            </div>
              )
        } else if (state.schools.servicePick.length < 1){
          return (
          <div>
              <h1>Please Choose a Service</h1>
                <div className="schools-container">
                  {state.schools.servicesList.map((school) => 
                    <div src={school.image_url} onClick={() => {store.dispatch(chooseService(school.name)); 
                      setServiceId(school.id)}}
                    key={school.id} value={school.id} className="services"id={`${school.name}`}>{school.name}</div >
                  )}
                </div>
            </div>
          )
        }
        else if (state.schools.serviceCategoryPick.length < 1){
          return (
          <div>
              <h1>Please Choose a Category</h1>
              <div className="schools-container">
                    {filteredCategories.map((school) => 
                      <div onClick={() => {store.dispatch(chooseServiceCategory(school.name)); setSelectedSchool("hi")}}
                      key={school.id}  className="category">{school.name}</div>
                    )}
                </div>
            </div>
          )
        } 
      }

    return(
        <div className="schoolPage" style={{overflowX: "hidden"}}>
            <HomeBanner onLogin={onLogin} user={user} setUsername={setUsername} setPassword={setPassword} username={username} password={password} setLoginShow={setLoginShow} loginShow={loginShow} title="ALL SCHOOLS"/>
              <div className="colleges-center">
                <div id="sort-bar"></div>
                <div id="school-render">
                      {selectedSchool? renderSchools(storeState) : handleSchoolSearch(storeState)}
                </div>
              </div>
        </div>
    )
}
export default SchoolPage

// {searchFilter.map(school=>(
//                <div className="collegeContainers">
//                 <a href={`/schools/${school.name}`}><img src={school.image_url} alt={school.name} key={school.id}/></a>
//               {console.log('ive been fetched')}
//               </div>
//               ))}