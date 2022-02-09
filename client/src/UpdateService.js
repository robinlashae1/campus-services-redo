import { Modal, Button } from "react-bootstrap";
import {React,useState} from "react";

function UpdateService({service,show,id,modalData,handleClose,serviceCategoryList,schoolList,user,servicesList}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [updatedName,setNewName]= useState([])
  const [newDescription,setDescription]= useState([])
  const [newPrice,setPrice]= useState([])
  const [serviceCategoryId,setServiceCategoryId]= useState([])
  const [serviceId,setServiceId]= useState([])
  const [schoolId,setSchoolId]= useState([])
  // UserServices.find(service => service.id === serviceId);
  console.log(id)
  const fileSelectedHandler= event => {
    console.log(event.target.files[0])
  }
  // (e) => setSelectedFile(e.target.files[0])

      function handleUpdate(id) {
        fetch(`/user_services/${id}`, {
            method: "PATCH",
                headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: user.profile_picture.record.id, 
                name: updatedName,
                description: newDescription,
                price: newPrice,
                service_id: serviceId,
                service_category_id: serviceCategoryId,
                school_id: schoolId,
                
            }),
        }).then((r) => r.json())
        .then((data) => console.log(data))
    }//images: selectedFile
//value={selectedFile}
    const filteredCategories = serviceCategoryList.filter(userService=>(
        userService.service.id === parseInt(serviceId)
        ))

    return (
      modalData?
      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header className="modalHeader">
        <Modal.Title id="contained-modal-title-vcenter">
            Update A Service
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
      <form onSubmit={console.log("submitted")} className="modal-details" className="modal-content" className="modalBody">
          <label for="name">Name</label>
          <input type="text" placeholder={modalData.name} onChange={(e)=>{setNewName(e.target.value)}}></input> <br/>
          <label for="Description">Description</label>
          <input type="text" placeholder={modalData.description} onChange={(e)=>{setDescription(e.target.value)}}/><br/>
        <label for="price">Price</label>
          <input type="integer" placeholder={modalData.price} onChange={(e)=>{setPrice(e.target.value)}}/><br/>
        <label for="ServiceCategoryId">What type of Service is this?</label>
        <select  onChange={(e)=>{setServiceId(e.target.value)}}><br/>
        <option value=""></option>
          {servicesList.map(service=>(
              <option key={service.id} value={service.id}>{service.name}</option>
          ))}
          </select><br/>
        <label for="ServiceCategoryId">What subCategory?</label>
        <select  onChange={(e)=>{setServiceCategoryId(e.target.value)}}><br/>
        <option value=""></option>
          {filteredCategories.map(service=>(
              <option key={service.id} value={service.id}>{service.name}</option>
          ))}
          </select><br/>
        <label for="SchoolId">School?</label>
        <select onChange={(e)=>{setSchoolId(e.target.value)}}>
        <option value=""></option>
        {schoolList.map(school=>(
              <option key={school.id} value={school.id}>{school.name}</option>
          ))}
          </select><br/>
        {/* <label for="images">images</label>
        <input type="file"  onChange={(e)=>{setSelectedFile(e.target.files[0])}}/>*/}
        </form>  
        
      </Modal.Body>
       <Modal.Footer className="modalFooter">
      <button type="submit" data-dismiss="modal" className="button" id="modalSubmit" form="modal-details" onClick={() => handleUpdate(modalData.id)} >Submit</button>
      <Button variant="secondary" onClick={handleClose} className="button" id="modalClose">Close</Button>
      </Modal.Footer>
    </Modal> : <></>
     );
}

export default UpdateService;