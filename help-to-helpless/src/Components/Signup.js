import React, { useState } from "react";
import {useNavigate } from 'react-router-dom'
import "../CSS/signup.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Server/userSchema";
const Signup = () => {
  const navigate=useNavigate()
  const [user, setUser] = useState({
    Fname: "",
    Gender: "",
    Mob: "",
    Email: "",
    Pass: "",
    Cpass: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { Fname, Gender, Mob, Email, Pass, Cpass } = user;
    if (!Fname || !Gender || !Mob || !Email || !Pass || !Cpass) {
      window.alert("Empty Field");
    } else if (user.Pass !== user.Cpass) {
      window.alert("Password and confirm Password Not matched");
    } else {
      const res = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Fname,
          Gender,
          Mob,
          Email,
          Pass,
          Cpass,
        }),
      });
      const data = await res.json();
      if (res.status === 400 || !data) {
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      } else {
        window.alert("Successfully Registered as Donar!!");
        console.log("Successfully Registered as Donar!!");
        navigate("/login");
      }
    }
  };

  return (
    <div className="down">
      <Form className="decora" method="post">
        <h1 className="registerheading">Start Donating Register Now</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            name="Fname"
            value={user.Fname}
            onChange={handleInputs}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicGender">
          <Form.Select
            required
            name="Gender"
            value={user.Gender}
            onChange={handleInputs}
          >
            <option selected>----Select Gender----</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMobile">
          <Form.Label>Enter Mobile Number</Form.Label>
          <Form.Control
            maxLength="10"
            required
            name="Mob"
            value={user.Mob}
            onChange={handleInputs}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="Email"
            value={user.Email}
            onChange={handleInputs}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="Pass"
            value={user.Pass}
            onChange={handleInputs}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasiccPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="cpassword"
            placeholder="Confirm Password"
            name="Cpass"
            value={user.Cpass}
            onChange={handleInputs}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" required />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={PostData}>
          SignUp
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
