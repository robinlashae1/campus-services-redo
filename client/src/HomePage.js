import React from "react";
import HomeBanner from "./HomeBanner";
import BottomBorder from "./BottomBorder";

 function HomePage(){
    return(
        <div className="homepage">
            <HomeBanner title="HOME"/>
            <div className="homeSlogan">
             <h1 id="homeSloganTop">Whatever you need,</h1>
             <h1 id="homeSloganBottom">Wherever You are!</h1>
            <p id="homeSloganP">Let us help connect you to the people you're looking for...<br/> Anywhere, Anytime. We got you!</p>
            <a href="/schools">
                <button className="button bottombuttonExtend"type="button">Find Your School</button>
            </a>
            </div>
            <div className="circles"><div id="outterCircle"><div id="innerCircle"></div></div></div>
            {/* <div className="testDiv"/> */}
            <BottomBorder/>
        </div>
    )
}
export default HomePage;