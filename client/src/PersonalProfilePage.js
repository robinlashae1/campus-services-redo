import React from "react";
import NavBar from "./NavBar";
import HomeBanner from "./HomeBanner";

function PersonalProfilePage({userServiceList,username,password,setPassword,setUsername,updateUser,user}) {
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/fixMe", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: username, password }),
        })
          .then((r) => r.json())
          .then((user) => updateUser(user));
      }
    return (
        <>
        <HomeBanner title="My Profile"/>
        <div id="profileDiv">
          {/* <h2>{user.name}</h2>
          <h3>{user.description}</h3> */}
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
      <label for="description">Description</label>
      <input type="description"/>
    </li>
    <li class="form-row">
      <button type="submit">Submit</button>
    </li>
  </ul>
</form>
    </> );
}

export default PersonalProfilePage