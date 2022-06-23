import {React,useEffect,useState} from "react";
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom";
import HomeBanner from "../bars/HomeBanner";
import ServiceCard from "../pages/ServiceCard";

function SpecificService({userServiceList,setLoginShow,loginShow,user,onLogin,setUsername,setPassword,username,password}) {
    const [uService,setUService]= useState(null);
    const history = useHistory();

    
    useEffect(() => {
        fetch(`/user_services/${history.location.state[0]}`)
        .then((r) => r.json())
        .then((userService) => setUService(userService))
      }, []);


     function renderService(service){
            return(
                <>
                 <div onClick={()=> {history.push({pathname: `/techs/${service.user.username}`, state: [service.user]})}}>
                 <div id="techProfileSpace"> 
                <img src={service.user.profile_picture? service.user.profile_picture : 
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Person_icon_%28the_Noun_Project_2817719%29.svg/1200px-Person_icon_%28the_Noun_Project_2817719%29.svg.png"} className="userPic"/> 
                 <h1>{service.user.name} / @{service.user.username} </h1>
                <h1>{service.user.description}</h1>
             </div>
            </div>
             <div style={{marginTop: "8%", width: "70vw"}}>
                 <ServiceCard className="specificRender" service={service}/>
                </div>
            </>
            )
     }

    return (
        <div style={{height: "100vh"}}>
            {/* <HomeBanner user={user} onLogin={onLogin} setUsername={setUsername} setPassword={setPassword} username={username} password={password} setLoginShow={setLoginShow} loginShow={loginShow} user={user}  /> */}
            <div className="fullSpecificDiv"> 
                {uService?  renderService(uService): 
                <div id="techProfileSpace">
                 <div className="loadingDiv"/>
             </div>
             }
             </div>
        </div>
    );
}

export default SpecificService;