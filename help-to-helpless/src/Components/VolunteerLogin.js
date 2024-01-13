import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../CSS/volunteerlogin.css";
import login from "../PICS/volunteer_img.png";
const VolunteerLogin = () => {
  return (
    <div>
      <div className="donation_container">
        <div className="donation_grid1">
          <div className="inner_box">
            <div>
              <h1 className="font1 clr12 font_size heading">Welcome Warriors</h1>
            </div>
            <div className="formdata">
              <form action="#" method="post">
                <Form.Group>
                  <Form.Label for="name" className="font-weight-bold">
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
                  <Form.Label for="pass" className="font-weight-bold">
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
                <Form.Group
                  className="mb-3 mt-3 makebold"
                  controlId="formBasicCheckbox"
                >
                  <Form.Label>
                    Don't have account ?
                    <Link to="/volunteer" className="decor">
                      Click here !
                    </Link>
                  </Form.Label>
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="mt-3"
                  value="submit"
                >
                  Click here to submit form
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="donation_grid2">
          <div className="inner_box_volunteer">
            <img className="login" src={login} alt="login set" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerLogin;
