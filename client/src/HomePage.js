import React from "react";
import HomeBanner from "./HomeBanner";
import BottomBorder from "./BottomBorder";

 function HomePage(){
    return(
        <div className="homepage">
            <HomeBanner/>
            <p className="text-muted">Find What you Need, Whereever You are</p>
            <BottomBorder/>
        </div>
    )
}
export default HomePage;