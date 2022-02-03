import {React,useState} from "react";
import HomeBanner from "./HomeBanner";
import BottomBorder from "./BottomBorder";
import CreateServiceForm from "./CreateServiceForm"
import ServiceCard from "./ServiceCard"

// profile_picture:profile_picturepassword_confirmation:password_confirmation,,
function PersonalProfilePage({userServiceList, schoolList, updateUser,user,setUser,servicesList,serviceCategoryList}) {
  
  const [modalShow, setModalShow] = useState(false);
//  const thisUsersServices= user.user_services
 console.log(user)
  // console.log(thisUsersServices)
      //:name,:description,:price,:service_category_id,:user_id,:school_id,:images
      // function handleAdd(e){
      //   e.preventDefault();
      //   fetch("/userServices", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({name,description,price,user_id,images }),
      //   })
      //     .then((r) => r.json())
      //     .then((service) => userServiceList.push(service));
      // }

      function handleLogout() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null)
            ;
          }
        });
      }
  return (
    <div>
      <HomeBanner title="My Profile"/>
      <div id="profileDiv">
        
      </div>
      <button type="button" id="serviceCreateButton" className="button" onClick={() => setModalShow(true)}>Create a Service</button>
      <CreateServiceForm  setModalShow={setModalShow} user={user} servicesList={servicesList} serviceCategoryList={serviceCategoryList} schoolList={schoolList} show={modalShow} handleClose={() => setModalShow(false)} />
      <button className="button" id="logOut" onClick={handleLogout}>Log Out</button>
         {/* {thisUsersServices.map(service=>{
          return(
            <ServiceCard service={service}/>
          ) */}
        {/* })} */}
        <BottomBorder/>
    </div> );
}

export default PersonalProfilePage