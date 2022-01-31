import {React,useState} from "react";
import HomeBanner from "./HomeBanner";
import BottomBorder from "./BottomBorder";
// profile_picture:profile_picturepassword_confirmation:password_confirmation,,
function PersonalProfilePage({userServiceList, updateUser,user,setUser}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [newName,setNewName]= useState([])
  const [newUsername,setUsername]= useState([])
  const [newPassword,setPassword]= useState([])
  const [newDescription,setDescription]= useState([])
  const [passwordConfirm,setPasswordConfirm]= useState([])
  

  function handleSubmit(e){
    const updatedAttributes= {newName, newUsername, newPassword, newDescription, passwordConfirm, selectedFile}
        e.preventDefault();
        fetch(`/users_services`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedAttributes),
        })
          .then((r) => r.json())
          .then((user) => setUser(user));
      }
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
    <>
      <HomeBanner title="My Profile"/>
      <div id="profileDiv">
        {/* {user.profilePicture}
        {user.map(element=>{
          return(
            console.log(element)
          )
        })} */}
        
      </div>
      <form onSubmit={handleSubmit} >
        <ul class="profileForm">
        <li class="form-row">
          <label for="name">Name</label>
          <input type="text"  onChange={(e)=>{setNewName(e.target.value)}}/>
        </li>
        <li class="form-row">
          <label for="username">Username</label>
          <input type="text"  onChange={(e)=>{setUsername(e.target.value)}}/>
        </li>
        <li class="form-row">
        <label for="password">Password</label>
          <input type="text"  onChange={(e)=>{setPassword(e.target.value)}}/>
      </li>
      <li class="form-row">
        <label for="password confirmation">Password Confirmation</label>
        <input type="text"  onChange={(e)=>{setPasswordConfirm(e.target.value)}}/>
      </li>
      <li class="form-row">
        <label for="description">Description</label>
        <input type="description"  onChange={(e)=>{setDescription(e.target.value)}}/>
      </li>
      <li class="form-row">
        <label for="profile picture">Profile Picture</label>
        <input type="file" value={selectedFile} onChange={(e) => setSelectedFile(e.target.files[0])}/>
        </li>
        <li class="form-row">
      <button type="submit" className="button" id="submit">Submit</button>
    </li>
  </ul>
</form>
<button className="button" id="addNewService">Add New service</button>
<button className="button" id="logOut" onClick={handleLogout}>Log Out</button>
<BottomBorder/>
    </> );
}

export default PersonalProfilePage