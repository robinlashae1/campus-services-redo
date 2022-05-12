import './App.css';
import {React, useEffect, useState} from "react";
import { createStore } from "redux";
import HomePage from './pages/HomePage';
import SchoolPage from './pages/SchoolPage';
import { Route, Switch, BrowserRouter} from "react-router-dom";
import About from './pages/About';
import Rescue from './pages/Rescue';
import Login from './forms/Login';
import PersonalProfilePage from './pages/PersonalProfilePage';
import SpecificService from './pages/SpecificService';
import store from "./store"
import {setRedUser, setServiceList, setServiceCategoryList,setUserServiceList,setSchoolList} from "./slices/schoolsSlices.js";


function App(){
  const [user, setUser]= useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginShow, setLoginShow] = useState(false)

    useEffect(() => {
        fetch("/user_services")
        .then((r) => r.json())
        .then((userService) => store.dispatch(setUserServiceList(userService)))
      }, []);
      useEffect(() => {
        fetch("/service_categories")
        .then((r) => r.json())
        .then((serviceCategory) => store.dispatch(setServiceCategoryList(serviceCategory)))
      }, []);
      useEffect(() => {
        fetch("/schools")
        .then((r) => r.json())
        .then((schools) => store.dispatch(setSchoolList(schools)))
    }, []);
  
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json()
        .then((user) => store.dispatch(setUser(user)));
      }
    });
  }, []);

    useEffect(() => {
        fetch("/services")
        .then((r) => r.json())
        .then((services) => store.dispatch(setServiceList(services)))
      }, []);

      function handleDelete(id) {
        fetch(`/user_services/${id}`, {
            method: 'DELETE',
        }).then((r) => {
            if (r.ok) {
              store.dispatch(setUserServiceList((services) =>
                services.filter((services) => services.id !== id)
                ));}})
              }

  console.log(store.getState())
  return(
    <div className='App'>
      <BrowserRouter>
      {/* <HomeBanner user={user} onLogin={setUser} setUsername={setUsername} setPassword={setPassword} username={username} password={password}/> */}
      <Switch>
         <Route exact path="/login" >
            <Login user={user} onLogin={setUser} setUsername={setUsername} username={username} password={password} setPassword={setPassword}/>
          </Route>
          <Route exact path="/" >
            <HomePage setUser={setUser} user={user} setLoginShow={setLoginShow} loginShow={loginShow} onLogin={setUser} setUsername={setUsername} setPassword={setPassword} username={username} password={password}/>
          </Route>
          <Route exact path="/about">
            <About setLoginShow={setLoginShow} loginShow={loginShow} user={user} onLogin={setUser} setUsername={setUsername} setPassword={setPassword} username={username} password={password}/>
          </Route>
          <Route exact path="/findMySchools" >
            <SchoolPage store={store} setLoginShow={setLoginShow} loginShow={loginShow} user={user} onLogin={setUser} setUsername={setUsername} setPassword={setPassword} username={username} password={password}/>
          </Route>
          <Route exact path='/myProfile'>
            <PersonalProfilePage onLogin={setUser} setLoginShow={setLoginShow} loginShow={loginShow} handleDelete={handleDelete}  setUsername={setUsername} user={user} setUser={setUser}/>
          </Route>
          <Route>
            <Rescue/>
          </Route>
      </Switch>
      </BrowserRouter>
    </div>
  )}

export default App;


 {/* <Route exact path={`/schools/:schoolName`} >
            <SchoolServicesPage setLoginShow={setLoginShow} onLogin={setUser} loginShow={loginShow} user={user} servicesList={servicesList} setUsername={setUsername} setPassword={setPassword} username={username} password={password}/>
          </Route>
          <Route exact path="/schools/:schoolName/:serviceName" >
            <ServiceCategoryPage setLoginShow={setLoginShow} onLogin={setUser} loginShow={loginShow} user={user} serviceCategoryList={serviceCategoryList} setUsername={setUsername} setPassword={setPassword} username={username} password={password}/>
          </Route>
          <Route exact path= '/schools/:schoolName/:serviceName/:serviceCategoryName'>
            <AllTechsPage setLoginShow={setLoginShow} onLogin={setUser} loginShow={loginShow} user={user} servicesList={userServiceList} setUsername={setUsername} setPassword={setPassword} username={username} password={password}/>
          </Route>
          <Route exact path="/techs/:userName" >
            <TechProfilePage setLoginShow={setLoginShow} onLogin={setUser} loginShow={loginShow} user={user} userServiceList={userServiceList} setUsername={setUsername} setPassword={setPassword} username={username} password={password}/>
          </Route>
          <Route exact path="/techs/:userName/:serviceName/:serviceId" >
            <SpecificService setLoginShow={setLoginShow} onLogin={setUser} loginShow={loginShow} user={user} userServiceList={userServiceList} setUsername={setUsername} setPassword={setPassword} username={username} password={password}/>
          </Route> */}
          {/* <Route exact path="/:userName/:serviceName">
            <TechServicePage/>
          </Route> */}