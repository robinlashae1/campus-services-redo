import {React,useState} from "react";
import NavBar from "./NavBar";
import HomeBanner from "./HomeBanner";
import BottomBorder from "./BottomBorder";
// profile_picture:profile_picturepassword_confirmation:password_confirmation,,
function PersonalProfilePage({userServiceList,username,password,setPassword,setUsername,updateUser,user,setUser}) {
  const [selectedFile, setSelectedFile] = useState(null);  
  function handleSubmit(e) {
        e.preventDefault();
        fetch("/fixMe", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: e.target.value, password:e.target.value,  name:e.target.value, is_tech:true}),
        })
          // .then((r) => r.json())
          // .then((user) => updateUser(user));
      }
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
      function handleLogoutClick() {
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
          <img href={selectedFile} alt="profile picture"/>
          <h1></h1>
      </div>
      <form onSubmit={handleSubmit}>
        <ul class="profileForm">
        <li class="form-row">
          <label for="name">Name</label>
          <input type="text" />
        </li>
        <li class="form-row">
          <label for="username">Username</label>
          <input type="text" />
        </li>
        <li class="form-row">
        <label for="password">Password</label>
          <input type="text" />
      </li>
      <li class="form-row">
        <label for="password confirmation">Password Confirmation</label>
        <input type="text" />
      </li>
      <li class="form-row">
        <label for="description">Description</label>
        <input type="description"/>
      </li>
      <li class="form-row">
        <label for="profile picture">Profile Picture</label>
        <input type="file" value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[0])}/>
        </li>
        <li class="form-row">
      <button type="submit" className="button" id="submit">Submit</button>
    </li>
  </ul>
</form>
<button className="button" id="logOut" onClick={handleLogoutClick}>Log Out</button>
<BottomBorder/>
    </> );
}

export default PersonalProfilePage