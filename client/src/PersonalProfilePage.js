import {React,useState} from "react";
import HomeBanner from "./HomeBanner";
import BottomBorder from "./BottomBorder";
import CreateServiceForm from "./CreateServiceForm"
import ServiceCard from "./ServiceCard"
import { useHistory } from "react-router-dom";
import UpdateService from "./UpdateService";

// profile_picture:profile_picturepassword_confirmation:password_confirmation,,
function PersonalProfilePage({schoolList, handleDelete, updateUser,user,setUser,servicesList,serviceCategoryList}) {
  
  const [createModalShow, setCreateModalShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(null);
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
      <button type="button" id="serviceCreateButton" className="button" onClick={() => setCreateModalShow(true)}>Create a Service</button>
      <CreateServiceForm  setCreateModalShow={setCreateModalShow} user={user} 
      servicesList={servicesList} serviceCategoryList={serviceCategoryList} 
      schoolList={schoolList} show={createModalShow} handleClose={() => setCreateModalShow(false)} />
      <button className="button" id="logOut" onClick={handleLogout}>Log Out</button>
      <div className="personalProfileServices">
        { user.user_services.map(service=>{
          return(
            <ServiceCard setModalData={setModalData} user={user} setModalShow={setModalShow}
            key={service.id} handleDelete={handleDelete} className={"personalServiceCard"} service={service}/>
          ) })}
           <UpdateService  modalData={modalData} setModalShow={setModalShow} 
           user={user} servicesList={servicesList} serviceCategoryList={serviceCategoryList}
            schoolList={schoolList} show={modalShow} handleClose={() => setModalShow(false)}/> 
        </div>
        <BottomBorder/> 
    </div> : <div>
      <HomeBanner title="My Profile"/>
      <div id="profileDiv">
        <div className="loadingDiv"/>
      </div>
        <button type="button" id="serviceCreateButton" className="button" onClick={() => setCreateModalShow(true)}>Create a Service</button>
          <CreateServiceForm  setCreateModalShow={setCreateModalShow} user={user} 
              servicesList={servicesList} serviceCategoryList={serviceCategoryList} 
              schoolList={schoolList} show={createModalShow} handleClose={() => setCreateModalShow(false)} />
      <button className="button" id="logOut" onClick={handleLogout}>Log Out</button>
      <div className="personalProfileServices">
        <div className="loadingDiv"/>
        </div>
        </div>
  )}

export default PersonalProfilePage