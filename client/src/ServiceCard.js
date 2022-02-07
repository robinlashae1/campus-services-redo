import {React} from "react";
import UpdateService from "./UpdateService";
function ServiceCard({service, className,canEdit,handleDelete,modalShow,setModalShow,servicesList,user,serviceCategoryList,schoolList}) {
const des = service.description
const count = 150
const results = des.slice(0, count)

    return (
        canEdit === true ?
        <>
            <div className={`${className} serviceCard`}>
            <div id="specificName">{service.name}</div>
            <div id="specificPrice">{`$${service.price}`}</div>
            <div id="specificDescription">{`${results}...`}</div>
            <button onClick={() => handleDelete(service.id)}>Trash</button>
            <button onClick={() => setModalShow(true)}>Edit</button>
            <UpdateService id={service.id} service={service} setModalShow={setModalShow} user={user} servicesList={servicesList} serviceCategoryList={serviceCategoryList} schoolList={schoolList} show={modalShow} handleClose={() => setModalShow(false)} id={service.id}/>
            </div>
        </>: <div className={`${className} serviceCard`}>
            <div id="specificName">{service.name}</div>
            <div id="specificPrice">{`$${service.price}`}</div>
            <div id="specificDescription">{`${results}...`}</div>
            </div>
     );
}

export default ServiceCard;