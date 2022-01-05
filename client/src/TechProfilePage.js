import {React,useEffect, useState} from "react";
import { useParams } from "react-router-dom"
import BottomBorder from "./BottomBorder";

function TechProfilePage() {
    return ( 
        <div>
            <div className="banner"/>
            <div className="profilePic"/>
            <BottomBorder/>
        </div>
    );
}

export default TechProfilePage;