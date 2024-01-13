import React from "react";
import { Link } from "react-router-dom";
import logo from "../PICS/M.png";
import "../CSS/header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="fixed-top boxshs">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" toggle="collapse" data-target=".navbar-collapse">
            <Nav className="me-auto headerfont tocenter teeen " >
              <Nav.Link>
                <Link to="/" className="text-decoration-none headercolor">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about" className="text-decoration-none headercolor">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/donation"
                  className="text-decoration-none headercolor"
                >
                  Donation
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="/contact"
                  className="text-decoration-none headercolor"
                >
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
            <Nav className="headerfont tocenter teeen">
              <Nav.Link>
                <Link to="/login" className="text-decoration-none headercolor">
                  Login
                </Link>
              </Nav.Link>
              <Nav.Link eventKey={2}>
                <Link to="/signup" className="text-decoration-none headercolor">
                  SignUp
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
