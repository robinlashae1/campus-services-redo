import {React,useState} from "react";
import HomeBanner from "./HomeBanner";
import BottomBorder from "./BottomBorder";
import CreateServiceForm from "./CreateServiceForm"
import ServiceCard from "./ServiceCard"
import { useHistory } from "react-router-dom";

// profile_picture:profile_picturepassword_confirmation:password_confirmation,,
function PersonalProfilePage({schoolList, handleDelete, updateUser,user,setUser,servicesList,serviceCategoryList}) {
  
  const [modalShow, setModalShow] = useState(false);
  let history = useHistory();

      function handleLogout() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null)
            history.push("/");
          }
        });
      }

      
console.log(user)
  return (
    user?
    <div>
      <HomeBanner title="My Profile"/>
      <div id="profileDiv">
        {` Hi, ${user.name}!`} <br/>
        {user.username}
      </div>
      <button type="button" id="serviceCreateButton" className="button" onClick={() => setModalShow(true)}>Create a Service</button>
      <CreateServiceForm  setModalShow={setModalShow} user={user} servicesList={servicesList} serviceCategoryList={serviceCategoryList} schoolList={schoolList} show={modalShow} handleClose={() => setModalShow(false)} />
      <button className="button" id="logOut" onClick={handleLogout}>Log Out</button>
      <div className="personalProfileServices">
        { user.user_services.map(service=>{
          return(
            <ServiceCard user={user} servicesList={servicesList} serviceCategoryList={serviceCategoryList} schoolList={schoolList} modalShow={modalShow} setModalShow={setModalShow}key={service.id} canEdit={true} handleDelete={handleDelete} serviceId={service.id} className={"personalServiceCard"} service={service}/>
          ) })}
        </div>
        <BottomBorder/> 
    </div> : <h1>"not a user"</h1> 
  )}

export default PersonalProfilePage