import React from "react";
import NavBar from "./NavBar";

function HomeBanner({title}){
    return(
    <div className="homepage">
        <div id="title-banner">
            <h1>Campus Finder</h1>
        </div>
        <NavBar/>
        <div id="TopBorder">
            <h2 className="title">{title}</h2>
        </div>  
        </div>
    )
}
export default HomeBanner