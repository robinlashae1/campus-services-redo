import {React,useState} from "react";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";

function Login({onLogin,username,password,setPassword,setUsername,user}) {
  let history = useHistory();
  const [errors, setErrors] = useState([]);
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password }),
      })
        .then((r) => {
          if (r.ok){
          r.json().then((user) => onLogin(user)).then(history.push("/"));
    } else {
      r.json().then((err) => setErrors(err.errors));
    }
  });}
    console.log(errors)
    return(
    user ?
        <a href="http://localhost:4000/myProfile">
        <div className="profileFile">
        <div className="profilePic"></div>
        </div>
        </a>:
    <div className="Login">
        <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
        />
        </Form.Group>
          <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
            </Form.Group>
            <button className="submitButton">Submit</button>
      </Form>
      </div> 
    )  
  }
  export default Login