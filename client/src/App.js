import './App.css';
import {React, useEffect, useState} from "react";
import HomePage from './HomePage';
import SchoolPage from './SchoolPage';
import SchoolServicesPage from './SchoolServicesPage';
import ServiceCategoryPage from './ServiceCategoryPage';
import { Route, Switch, BrowserRouter} from "react-router-dom";
import About from './About';
import Rescue from './Rescue';
import Login from './Login';
import NavBar from './NavBar';
import TechProfilePage from './TechProfilePage';
import AllTechsPage from './AllTechsPage';
import PersonalProfilePage from './PersonalProfilePage';
// import TechServicePage from './TechServicePage';
import SpecificService from './SpecificService';


function App(){
  const [user, setUser]= useState(null);
  const [servicesList, setServicesList]= useState([]);
  const [serviceCategoryList, setServiceCategoryList]=useState([]);
  const [userServiceList, setUserServiceList] = useState([]);
  const [schoolList, setschoolList] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

    useEffect(() => {
        fetch("/user_services")
        .then((r) => r.json())
        .then((userService) => setUserServiceList(userService))
      }, []);
      useEffect(() => {
        fetch("/service_categories")
        .then((r) => r.json())
        .then((serviceCategory) => setServiceCategoryList(serviceCategory))
      }, []);
      useEffect(() => {
        fetch("/schools")
        .then((r) => r.json())
        .then((schools) => setschoolList(schools))
    }, []);
  
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json()
        .then((user) => setUser(user));
      }
    });
  }, []);

    useEffect(() => {
        fetch("/services")
        .then((r) => r.json())
        .then((services) => setServicesList(services))
      }, []);

      function handleDelete(id) {
        fetch(`/user_services/${id}`, {
            method: 'DELETE',
        }).then((r) => {
            if (r.ok) {
              setUserServiceList((services) =>
                services.filter((services) => services.id !== id)
                );}})}
  
  return(
    <div className='App'>
      <BrowserRouter>
      <NavBar user={user} onLogin={setUser} setUsername={setUsername} setPassword={setPassword} username={username} password={password}/>
      <Switch>
         <Route exact path="/login" >
            <Login user={user} onLogin={setUser} setUsername={setUsername} username={username} password={password} setPassword={setPassword}/>
          </Route>
          <Route exact path="/" >
            <HomePage />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/schools" >
            <SchoolPage schoolList={schoolList}/>
          </Route>
          <Route exact path={`/schools/:schoolName`} >
            <SchoolServicesPage servicesList={servicesList}/>
          </Route>
          <Route exact path="/schools/:schoolName/:serviceName" >
            <ServiceCategoryPage serviceCategoryList={serviceCategoryList}/>
          </Route>
          <Route exact path= '/schools/:schoolName/:serviceName/:serviceCategoryName'>
            <AllTechsPage servicesList={userServiceList} user={user}/>
          </Route>
          <Route exact path="/techs/:userName" >
            <TechProfilePage userServiceList={userServiceList}/>
          </Route>
          <Route exact path="/techs/:userName/:serviceName/:serviceId" >
            <SpecificService userServiceList={userServiceList} user={user}/>
          </Route>
          {/* <Route exact path="/:userName/:serviceName">
            <TechServicePage/>
          </Route> */}
          <Route exact path='/myProfile'>
            <PersonalProfilePage handleDelete={handleDelete} schoolList={schoolList} userServiceList={userServiceList} setUsername={setUsername} user={user} setUser={setUser} serviceCategoryList={serviceCategoryList} servicesList={servicesList}/>
          </Route>
          <Route exact path="/rescue">
            <Rescue/>
          </Route>
      </Switch>
      </BrowserRouter>
    </div>
  )}

export default App;
