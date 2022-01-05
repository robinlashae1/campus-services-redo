import React from "react";
import {NavLink} from "react-router-dom";
import Login from "./Login";


function NavBar({setPassword,setUsername,user, setUser,onLogin,username,password}) {
  // let history = useHistory();
  // function handleLogoutClick() {
  //   fetch("/logout", { method: "DELETE" }).then((r) => {
  //     if (r.ok) {
  //       setUser(null)
  //       history.push("/");
  //     }
  //   });
  // }
    return (
      <div>
        <div id="title-banner">
            <h1 >Campus Finder</h1>
         </div>   
        <NavLink className="navLinks"
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={linkStyles}
          /* add prop for activeStyle */
        >
          Home
        </NavLink>
        <NavLink className="navLinks"
          to="/about"
          exact
          style={linkStyles}
        >
          About
        </NavLink>
        <NavLink className="navLinks"
          to="/schools"
          exact
          style={linkStyles}
        >
          Find Your College
        </NavLink>
        <div className="Login">
          <Login onLogin={onLogin} setUsername={setUsername} setPassword={setPassword} username={username} password={password} />
        </div>
      </div>
    );
  }
    export default NavBar

    const linkStyles = {
        display: "inline-block",
        width: "160px",
        padding: "12px",
        margin: "0 6px 6px",
        textDecoration:"none",
        color: "black",
      };
