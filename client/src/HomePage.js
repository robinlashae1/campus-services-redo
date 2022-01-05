import React from "react";
import HomeBanner from "./HomeBanner";
import BottomBorder from "./BottomBorder";

 function HomePage(){
    return(
        <div className="homepage">
            <HomeBanner title="HOME"/>
             <h1 className="homeSlogan">Whatever you need,</h1>
             <h1 className="homeSlogan">Wherever You are!</h1>
            <p className=" homeSlogan">Let us help connect you to the people you're looking for</p>
            <div className="testDiv"/>
            <BottomBorder/>
        </div>
    )
}
export default HomePage;