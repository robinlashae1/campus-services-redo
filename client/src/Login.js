import {React} from "react";
import Form from "react-bootstrap/Form";

function Login({onLogin,username,password,setPassword,setUsername,user}) {
    
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password }),
      })
        .then((r) => r.json())
        .then((user) => onLogin(user));
    }
   
    // function validateForm() {
    //   return username.length > 0 && password.length > 0;
    // }
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