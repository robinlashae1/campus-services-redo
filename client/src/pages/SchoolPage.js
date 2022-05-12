import {React,useEffect,useState} from "react";
import HomeBanner from "../bars/HomeBanner";
import BottomBorder from "../bars/BottomBorder";
import SearchBar from "material-ui-search-bar";
import { useSelector} from 'react-redux';
import {chooseSchool, chooseService, chooseServiceCategory} from "../slices/schoolsSlices.js"

function SchoolPage({setLoginShow,loginShow,user,onLogin,setUsername,setPassword,username,password,store}){
    const [selectedSchool, setSelectedSchool] = useState(null);
    const [serviceId,setServiceId]= useState([])
    const storeState = useSelector(state => state)
    console.log(storeState.schools.servicesList)

    const filteredCategories = storeState.schools.serviceCategoryList.filter(userService=>(
      userService.service.id === parseInt(serviceId)
      )) 
     
    // const alphabeticalFiltered= schoolList.sort(function(a,b){
    //   if(a.name < b.name) { return -1; }
    // if(a.name > b.name) { return 1; }
    // return 0;
    // })

    // const handleSearch = (e) => {
    //     const filtered = alphabeticalFiltered.filter((school) => {
    //       return school.name.toLowerCase().includes(e)
    //     })
    //     setSearchFilter(filtered)
    //   }

    //   useEffect(() => {
    //     setSearchFilter(alphabeticalFiltered)
    //   },[alphabeticalFiltered])
    
    function renderSchools(){
      let services = storeState.schools.userServiceList.filter(services => (
       services.school.name === storeState.schools.schoolName 
       && services.service.name === storeState.schools.servicePick 
       && services.service_category.name === storeState.schools.serviceCategoryPick
      ))
      if (services){
        const chosenServices = services.map((service) => (
           <h1>{service.name}</h1>
        ))
        return (
          chosenServices
        )
      }
    }

      function handleSchoolSearch(state){
        if (state.schools.schoolName === ""){
          return (
            <div>
              <h1>Please Choose a School</h1>
              <div className="schools-container">
                {state.schools.schoolList.map((school) =>
                      <img src={school.image_url} onClick={(e) => store.dispatch(chooseSchool(e.target.value))}
                      key={school.id} value={school.name} className="collegeContainers"/>
                    )}
              </div>
            </div>
              )
        } else if (state.schools.servicePick === ""){
          return (
          <div>
              <h1>Please Choose a Service</h1>
                <div className="schools-container">
                  {state.schools.servicesList.map((school) => 
                  
                    <img src={school.image_url} onClick={(e) => {store.dispatch(chooseService(school.name)); console.log(e.target.alt)}}
                    key={school.id} value={school.id} alt={school.name} />
                  )}
                </div>
            </div>
          )
        }
        else if (state.schools.serviceCategoryPick === ""){
          return (
          <div>
              <h1>Please Choose a Category</h1>
                <form className="formSelecting">
                  <select onChange={(e) => store.dispatch(chooseServiceCategory(e.target.value))}>
                    <option>Please Select A Category</option>
                    {filteredCategories.map((school) => 
                      <option  key={school.id} value={school.name}>{school.name}</option>
                    )}
                  </select>
                </form>
            </div>
          )
        } else {
          renderSchools()
        }
      }

    return(
        <div className="schoolPage" style={{overflowX: "hidden"}}>
            <HomeBanner onLogin={onLogin} user={user} setUsername={setUsername} setPassword={setPassword} username={username} password={password} setLoginShow={setLoginShow} loginShow={loginShow} title="ALL SCHOOLS"/>
              <div className="colleges-center">
                <div id="sort-bar"></div>
                <div id="school-render">
                      {selectedSchool? renderSchools() : handleSchoolSearch(storeState)}
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