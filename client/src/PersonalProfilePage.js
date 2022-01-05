import React from "react";
import Login from "./Login";

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
        <div id="profileDiv">
          {/* <h2>{user.name}</h2>
          <h3>{user.description}</h3> */}
        </div>
        <form>
  <ul class="profileForm">
    <li class="form-row">
      <label for="name">Name</label>
      <input type="text" id="name"/>
    </li>
    <li class="form-row">
      <label for="username">Username</label>
      <input type="text" id="townborn"/>
    </li>
    <li class="form-row">
      <label for="description">Description</label>
      <input type="description" id="email"/>
    </li>
    <li class="form-row">
      <button type="submit">Submit</button>
    </li>
  </ul>
</form>
    </> );
}

export default PersonalProfilePage