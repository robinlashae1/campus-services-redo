import './App.css';
import {React, useEffect, useState} from "react";
import HomePage from './HomePage';
import SchoolPage from './SchoolPage';
import SchoolServicesPage from './SchoolServicesPage';
import { Route, Switch, BrowserRouter} from "react-router-dom";
import About from './About';
import Rescue from './Rescue';
import Login from './Login';
import NavBar from './NavBar';
import TechProfilePage from './TechProfilePage';
import AllTechsPage from './AllTechsPage';
import PersonalProfilePage from './PersonalProfilePage';
import TechServicePage from './TechServicePage';
// /schools/:schoolName

function App(){
  const [user, setUser]= useState(null);
  const [servicesList, setServicesList]= useState([]);
  const [userServiceList, setUserServiceList] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

    useEffect(() => {
        fetch("/user_services")
        .then((r) => r.json())
        .then((userService) => setUserServiceList(userService))
      }, []);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

    useEffect(() => {
        fetch("/services")
        .then((r) => r.json())
        .then((services) => setServicesList(services))
      }, []);

      
      // ()
//
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
            <SchoolPage />
          </Route>
          <Route exact path={`/schools/:schoolName`} >
            <SchoolServicesPage servicesList={servicesList}/>
          </Route>
          <Route exact path= '/schools/:schoolName/:serviceName'>
            <AllTechsPage servicesList={userServiceList}/>
          </Route>
          <Route exact path="/techs/:userName" >
            <TechProfilePage userServiceList={userServiceList}/>
          </Route>
          <Route exact path="/:userName/:serviceName">
            <TechServicePage/>
          </Route>
          <Route exact path='/myProfile'>
            <PersonalProfilePage userServiceList={userServiceList} setUsername={setUsername} user={user} setUser={setUser}/>
          </Route>
          <Route exact path="/rescue">
            <Rescue/>
          </Route>
      </Switch>
      </BrowserRouter>
    </div>
  )}

export default App;
