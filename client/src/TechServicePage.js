import {React} from "react";
import { useParams } from "react-router-dom"
import HomeBanner from "./HomeBanner";
import BottomBorder from "./BottomBorder";

function TechServicePage() {
    const {userName,serviceName} = useParams();
    return (
        <>
            <HomeBanner/>
            <>service</>
            <BottomBorder/>
        </>
     );
}

export default TechServicePage ;