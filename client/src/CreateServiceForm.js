// import Modal from "react-bootstrap/Modal"
// import Button from "react-bootstrap/Button"
import { Modal, Button } from "react-bootstrap";
import {React,useState,useEffect} from "react";

function CreateServiceForm({setModalShow,setShow,show,handleClose,serviceCategoryList,schoolList,user,servicesList}) {
    const [selectedFile, setSelectedFile] = useState(null);
  const [newName,setNewName]= useState([])
  const [newDescription,setDescription]= useState([])
  const [newPrice,setPrice]= useState([])
  const [serviceCategoryId,setServiceCategoryId]= useState([])
  const [serviceId,setServiceId]= useState([])
  const [schoolId,setSchoolId]= useState([])
  const state = {isOpen: false};
  const openModal = () => this.setState({ isOpen: true });
  const closeModal = () => this.setState({ isOpen: false });
  
  

    const updatedAttributes= {newName, newDescription, newPrice, serviceCategoryId, schoolId, selectedFile}

    function handleSubmit(e){
        e.preventDefault();
        fetch(`/user_services`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: user.profile_picture.record.id, 
            name: newName,
            description: newDescription,
            price: newPrice,
            service_id: serviceId,
            service_category_id: serviceCategoryId,
            school_id: schoolId
          }),
        })
          .then((r) => r.json())
          .then((data) => console.log(data)) 
      }

    const filteredCategories = serviceCategoryList.filter(userService=>(
        userService.service.id === parseInt(serviceId)
        ))
    return (
      
      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header className="modalHeader">
        <Modal.Title id="contained-modal-title-vcenter">
            Add a Service
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
      <form onSubmit={handleSubmit} id="modal-details" className="modal-content" className="modalBody">
          <label for="name">Name</label>
          <input type="text"  onChange={(e)=>{setNewName(e.target.value)}}/> <br/>
          <label for="Description">Description</label>
          <input type="text"  onChange={(e)=>{setDescription(e.target.value)}}/><br/>
        <label for="price">Price</label>
          <input type="integer"  onChange={(e)=>{setPrice(e.target.value)}}/><br/>
        <label for="ServiceCategoryId">What type of Service is this?</label>
        <select  onChange={(e)=>{setServiceId(e.target.value)}}><br/>
          {servicesList.map(service=>(
              <option key={service.id} value={service.id}>{service.name}</option>
          ))}
          </select><br/>
        <label for="ServiceCategoryId">What subCategory?</label>
        <select  onChange={(e)=>{setServiceCategoryId(e.target.value)}}><br/>
          {filteredCategories.map(service=>(
              <option key={service.id} value={service.id}>{service.name}</option>
          ))}
          </select><br/>
        <label for="SchoolId">School?</label>
        <select onChange={(e)=>{setSchoolId(e.target.value)}}>
        {schoolList.map(school=>(
              <option key={school.id} value={school.id}>{school.name}</option>
          ))}
          </select><br/>
        {/* <label for="profile picture">images</label>
        <input type="file" value={selectedFile} onChange={(e) => setSelectedFile(e.target.files[0])}/>*/}
        </form> 
      </Modal.Body>
       <Modal.Footer className="modalFooter">
      <button type="submit" data-dismiss="modal" className="button" id="modalSubmit" form="modal-details" onClick={console.log("submitted")} >Submit</button>
      <Button variant="secondary" onClick={handleClose} className="button" id="modalClose">Close</Button>
      </Modal.Footer>
    </Modal> 
     );
}

export default CreateServiceForm;