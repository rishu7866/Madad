import React, { useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";
import "../CSS/volunteer.css";
import { Link } from "react-router-dom";
import volunteer from "../PICS/need.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Server/userSchemaVol";
import { useNavigate } from "react-router-dom";
const Volunteer = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    Fname: "",
    Gender: "",
    Mob: "",
    Email: "",
    Country: "",
    State: "",
    City: "",
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
    const { Fname, Gender, Mob, Email,Country,State,City, Pass, Cpass } = user;
    if (Country.length===0 || State.length===0 || City.length===0) {
      window.alert("Dont country/State/City from the list and try again" )
    }
    else if(!Fname || !Gender || !Mob || !Email || !Country || !State || !City || !Pass || !Cpass){
      window.alert("Empty Field");
    }
    else if (user.Pass !== user.Cpass) {
      window.alert("Password and confirm Password Not matched");
    }else{
      const res = await fetch("/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Fname,
          Gender,
          Mob,
          Email,
          Country,
          State,
          City,
          Pass,
          Cpass,
        }),
      });
      const data = await res.json();
      if (res.status === 422 || !data) {
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      } else {
        window.alert("Volunteer registered successfully");
        console.log("Volunteer registered successfully");
        navigate("/volunteerlogin");
      }
    }
  };
  // ********************************County State City
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  // eslint-disable-next-line
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    const getCountries = async () => {
      try {
        setIsLoading(true);
        const result = await Country.getAllCountries();
        let allCountries = [];
        allCountries = result?.map(({ isoCode, name }) => ({
          isoCode,
          name,
        }));
        const [{ isoCode: firstCountry } = {}] = allCountries;
        setCountries(allCountries);
        setSelectedCountry(firstCountry);
        setIsLoading(false);
      } catch (error) {
        setCountries([]);
        setIsLoading(false);
      }
    };

    getCountries();
  }, []);

  useEffect(() => {
    const getStates = async () => {
      try {
        const result = await State.getStatesOfCountry(selectedCountry);
        let allStates = [];
        allStates = result?.map(({ isoCode, name }) => ({
          isoCode,
          name,
        }));
        const [{ isoCode: firstState = "" } = {}] = allStates;
        setCities([]);
        setSelectedCity("");
        setStates(allStates);
        setSelectedState(firstState);
      } catch (error) {
        setStates([]);
        setCities([]);
        setSelectedCity("");
      }
    };

    getStates();
  }, [selectedCountry]);

  useEffect(() => {
    const getCities = async () => {
      try {
        const result = await City.getCitiesOfState(
          selectedCountry,
          selectedState
        );
        let allCities = [];
        allCities = result?.map(({ name }) => ({
          name,
        }));
        const [{ name: firstCity = "" } = {}] = allCities;
        setCities(allCities);
        setSelectedCity(firstCity);
      } catch (error) {
        setCities([]);
      }
    };

    getCities();
  }, [selectedState, selectedCountry]);

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();

  //     try {
  //       const { user } = props;
  //       const updatedData = {
  //         country: countries.find(
  //           (country) => country.isoCode === selectedCountry
  //         )?.name,
  //         state:
  //           states.find((state) => state.isoCode === selectedState)?.name || '', // or condition added because selectedState might come as undefined
  //         city: selectedCity
  //       };

  //       await axios.post(`/register`, {
  //         ...user,
  //         ...updatedData
  //       });
  //       Swal.fire('Awesome!', "You're successfully registered!", 'success').then(
  //         (result) => {
  //           if (result.isConfirmed || result.isDismissed) {
  //             props.resetUser();
  //             props.history.push('/');
  //           }
  //         }
  //       );
  //     } catch (error) {
  //       if (error.response) {
  //         Swal.fire({
  //           icon: 'error',
  //           title: 'Oops...',
  //           text: error.response.data
  //         });
  //         console.log('error', error.response.data);
  //       }
  //     }
  //   };
  return (
    <>
      <div className="outer-container">
        <div className="inner-container">
          <div className="most_inner_container">
            <div className="left-side">
              <Form className="decora fontvol" method="post">
                <h1 className="registerheading">Join as Helping Hands</h1>
                <Form.Group className="mb-3" controlId="formBasicName">
                  {/* <Form.Label className="label-font">Enter Your Name</Form.Label> */}
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    name="Fname"
                    value={user.Fname} 
                    onChange={handleInputs}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicGender">
                  <Form.Select required name="Gender" value={user.Gender} onChange={handleInputs}>
                    <option selected>----Select Gender----</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMobile">
                  {/* <Form.Label>Enter Mobile Number</Form.Label> */}
                  <Form.Control
                    maxLength="10"
                    required
                    placeholder="Enter Mobile Number"
                    name="Mob"
                    value={user.Mob} 
                    onChange={handleInputs}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                    name="Email"
                    value={user.Email} 
                    onChange={handleInputs}
                  />
                  <Form.Text className="text-muted fs-5">
                    <small className="font-xs">
                      We'll never share your email with anyone else.
                    </small>
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCountry" value={user.Country} onChange={handleInputs}>
                  {/* <Form.Label>Select Country</Form.Label> */}
                  {isLoading && (
                    <p className="loading">Loading countries. Please wait...</p>
                  )}
                  <Form.Select
                    as="select"
                    name="Country"
                    // value={selectedCountry}
                    onChange={(event) => setSelectedCountry(event.target.value)}
                    required
                  >
                  <option selected>----Select Country----</option>
                    {countries.map(({ isoCode, name }) => (
                      <option value={isoCode} key={isoCode}>
                        {name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicState" value={user.State} onChange={handleInputs}>
                  {/* <Form.Label>Select State</Form.Label> */}
                  <Form.Select
                    id="state"
                    as="select"
                    name="State"
                    // value={selectedState}
                    onChange={(event) => setSelectedState(event.target.value)}
                    required
                  >
                   <option selected>----Select State----</option>
                    {states.length > 0 ? (
                      states.map(({ isoCode, name }) => (
                        <option value={isoCode} key={isoCode}>
                          {name}
                        </option>
                      ))
                    ) : (
                      <option value="" key="">
                        No state found
                      </option>
                    )}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicState" value={user.City} onChange={handleInputs}>
                  {/* <Form.Label>Select City</Form.Label> */}
                  <Form.Select
                    id="state"
                    as="select"
                    name="City"
                    // value={selectedCity}
                    onChange={(event) => setSelectedCity(event.target.value)}
                    required
                  >
                   <option selected>----Select City----</option>
                    {cities.length > 0 ? (
                      cities.map(({ name }) => (
                        <option value={name} key={name}>
                          {name}
                        </option>
                      ))
                    ) : (
                      <option value="">No cities found</option>
                    )}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  {/* <Form.Label>Password</Form.Label> */}
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="Pass"
                    value={user.Pass} 
                    onChange={handleInputs}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasiccPassword">
                  {/* <Form.Label>Confirm Password</Form.Label> */}
                  <Form.Control
                    type="cpassword"
                    placeholder="Confirm Password"
                    name="Cpass"
                    value={user.Cpass} 
                    onChange={handleInputs}
                    required
                  />
                </Form.Group>
                <div className="lastsection">
                  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" required className="font-xs"/>
            </Form.Group> */}
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Label>
                      {" "}
                      <Link to="/volunteerlogin" className="decor">
                        Click here to Login
                      </Link>
                    </Form.Label>
                  </Form.Group>
                </div>
                <Button variant="primary" type="submit" className="tocenter" onClick={PostData}>
                  SignUp
                </Button>
              </Form>
            </div>
            <div className="right-side">
              <img src={volunteer} alt="home" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Volunteer;
