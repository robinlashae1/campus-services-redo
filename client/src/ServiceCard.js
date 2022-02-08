import {React} from "react";
import UpdateService from "./UpdateService";
function ServiceCard({service, setModalData, className,handleDelete,setModalShow}) {
const des = service.description
const count = 150
const results = des.slice(0, count)

//() => 
    // return (
        if (className === "personalServiceCard") {
            return(
            <>
                <div className={`${className} serviceCard`}>
                <div id="specificName">{service.name}</div>
                <div id="specificPrice">{`$${service.price}`}</div>
                <div id="specificDescription">{`${results}...`}</div>
                <button onClick={() => handleDelete(service.id)}>Trash</button>
                <button onClick={()=> {setModalShow(true);setModalData(service)}}>Edit</button>
                </div>
            </>
            ) 
        } else if (className === "serviceCard"){
            return(
            <div className={`${className} serviceCard`}>
            <div id="specificName">{service.name}</div>
            <div id="specificPrice">{`$${service.price}`}</div>
            <div id="specificDescription">{`${results}...`}</div>
            </div>
            )
        }
        else if (className === "specificRender"){
            return(
                <div className={`${className} serviceCard`}>
                <div id="specificName">{service.name}</div> <br/>
                <div id="specificPrice">{`$${service.price}`}</div>
                <div id="specificDescription">{`${results}...`}</div>
                </div>  
             )
}}

export default ServiceCard;