import React from "react";
import "../CSS/signup.css";
// import { Link } from "react-router-dom";
// import Alter from "../PICS/alter.jpg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Signup = () => {
  return (
    <div className="down">
      <Form className="decora">
      <h1 className="registerheading">Start Donating Register Now</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicGender">
          <Form.Select required>
            <option value="" disabled selected>
            ----Select Gender----
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMobile">
          <Form.Label>Enter Mobile Number</Form.Label>
          <Form.Control maxLength="10" required>
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasiccPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="cpassword" placeholder="Confirm Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" required/>
        </Form.Group>
        <Button variant="primary" type="submit">
          SignUp
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
