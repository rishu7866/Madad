import React from "react";
// import { Link } from "react-router-dom";
import "../CSS/login.css";
import login from "../PICS/login.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const Login = () => {
  return (
    <>
      <div className="target">
        <div className="logingrid logingridsm">
          <div className="logincontainer">
          <div className="loginformdata">
              <div>
                <h1 className="font1 clr1 fontsize heading">Welcome Again</h1>
              </div>
              <form action="#" method="post">
                <Form.Group>
                  <Form.Label for="name" className="font-weight-bold sizee sizee">
                    Enter your User Id :
                  </Form.Label>
                  <Form.Control
                    id="name"
                    name="name"
                    type="email"
                    placeholder="Enter your full name"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label for="pass" className="font-weight-bold sizee">
                    Enter Password :
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your Mobile Number"
                    maxLength="10"
                    id="mobile"
                    name="mobile"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="mt-3 ml-5"
                  value="submit"
                >
                  LOGIN
                </Button>
              </form>
            </div>
          </div>
          <div className="imagegrid">
            <img src={login} alt="v" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
