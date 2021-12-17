import './App.css';
import {React, useEffect, useState} from "react";
import HomePage from './HomePage';
import SchoolPage from './SchoolPage';
import SchoolServicesPage from './SchoolServicesPage';
import { Route, Switch, BrowserRouter} from "react-router-dom";
import About from './About';

function App(){

  const [schoolList, setschoolList] = useState([]);
  const [servicesList, setServicesList]= useState([]);
  const schoolName = schoolList.map(school=>(school.name))
  console.log(schoolName)

useEffect(() => {
    fetch("/schools")
    .then((r) => r.json())
    .then((schools) => setschoolList(schools))
}, []);

useEffect(() => {
  fetch("/services")
  .then((r) => r.json())
  .then((services) => setServicesList(services))
}, []);

  return(
    <div className='App'>
      <BrowserRouter>
      <Switch>
          <Route exact path="/" >
            <HomePage />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/schools" >
            <SchoolPage schoolList={schoolList} schoolName={schoolList}/>
          </Route>
          <Route exact path={`/schools/:schoolName`} >
            <SchoolServicesPage schoolList={schoolList} servicesList={servicesList}/>
          </Route>
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
