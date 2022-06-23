import {React, useState,useEffect} from "react";
import { useParams, useHistory } from "react-router-dom"
import BottomBorder from "../bars/BottomBorder";
import HomeBanner from "../bars/HomeBanner";
import ServiceCard from "../pages/ServiceCard";
import SearchBar from "material-ui-search-bar";

function TechProfilePage({userServiceList,setLoginShow,loginShow,user,onLogin,setUsername,setPassword,username,password}) {
    // const [serviceList, setServiceList] = useState([]);
    const [specificTech, setSpecificTech]= useState(null)
    const [searchFilter, setSearchFilter] = useState([]);
    
    const {userName} = useParams();
    const history = useHistory();
    

    useEffect(() => {
      fetch(`/users/${history.location.state[0].id}`)
      .then((r) => r.json())
      .then((tech) => {setSpecificTech(tech); setSearchFilter(tech.user_services)})
    }, []);


    const handleSearch = (e) => {
        const filtered = specificTech.user_services.filter((service) => {
          return service.name.toLowerCase().includes(e)
        })
        setSearchFilter(filtered)
      }
      
      // useEffect(() => {
      //   setSearchFilter(specificTech.user_services)
      // },[specificTech])

      function renderService(services){
        let serviceArr = []
        for(let x = 0; x < services.length; x++){
          serviceArr.push(services[x])
        }
        return (serviceArr.map(service => {
         return( 
             <ServiceCard canEdit={false} className={"techServiceCard"} service={service}/> )
        }))
       }

    return ( 
      specificTech? 
        <div style={{height: "100vh"}}>
          
         
          {/* <div id="techServiceSpace"> */}
          <div style={{marginTop: "1%"}}>
            <div id="techProfileSpace">
            <img src={specificTech.profile_picture? specificTech.user.profile_picture: 
            "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
            } className="userPic"/>
              <h1>{specificTech.name}</h1>
              <h1>{specificTech.description}</h1>
            </div>
            <div className="displayTechService">
              <SearchBar className="search-bar techSearch gapDiv" onChange={handleSearch}/>
            {renderService(searchFilter)}
            </div>
            </div>
        </div>: 
        <></>
    );
}

export default TechProfilePage;
//<HomeBanner setUsername={setUsername} onLogin={onLogin} setPassword={setPassword} username={username} password={password} setLoginShow={setLoginShow} loginShow={loginShow} user={user} title={userName} />