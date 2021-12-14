import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import SchoolPage from './SchoolPage';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App(){
  return(
    <div>
      {/* <Routes>
    <Route path="/" element={<HomePage />}/>
      </Routes> */}
      <SchoolPage/>
      <HomePage />
      </div>
  )
}

export default App;
