import './App.css';
import HomePage from './HomePage';
import SchoolPage from './SchoolPage';
import { Route, Switch, BrowserRouter} from "react-router-dom";
function App(){
  return(
    <div className='App'>
      <BrowserRouter>
      <Switch>
          <Route exact path="/" >
            <HomePage/>
          </Route>
          <Route exact path="/allSchools" >
            <SchoolPage/>
          </Route>
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
