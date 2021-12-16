import React from "react";
import HomeBanner from "./HomeBanner";
import BottomBorder from "./BottomBorder";

 function HomePage(){
    return(
        <div className="homepage">
            <HomeBanner title="HOME"/>
            <p className="text-muted">Find What you Need, Whereever You are</p>
            <div className="testDiv"/>
            <BottomBorder/>
        </div>
    )
}
export default HomePage;