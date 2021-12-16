import React from "react";
import {NavLink} from "react-router-dom";


function NavBar() {
    return (
      <div>
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
