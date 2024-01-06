import React, { useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";
import "../CSS/volunteer.css";
import { Link } from "react-router-dom";
import volunteer from "../PICS/need.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Volunteer = (props) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
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
    // <div className="regdonation">
    //   <div className="containerreg">
    //     <div className="secondd">
    //       <Form className="decora font1">
    //         <h1 className="registerheading">Join as Helping Hands</h1>
    //         <Form.Group className="mb-3" controlId="formBasicName">
    //           <Form.Label>Enter Your Name</Form.Label>
    //           <Form.Control type="text" placeholder="Enter Name" required />
    //         </Form.Group>
    //         <Form.Group className="mb-3" controlId="formBasicGender">
    //           <Form.Select required>
    //             <option value="" disabled selected>
    //               ----Select Gender----
    //             </option>
    //             <option value="Male">Male</option>
    //             <option value="Female">Female</option>
    //           </Form.Select>
    //         </Form.Group>
    //         <Form.Group className="mb-3" controlId="formBasicMobile">
    //           <Form.Label>Enter Mobile Number</Form.Label>
    //           <Form.Control maxLength="10" required></Form.Control>
    //         </Form.Group>
    //         <Form.Group className="mb-3" controlId="formBasicEmail">
    //           <Form.Label>Email address</Form.Label>
    //           <Form.Control type="email" placeholder="Enter email" required />
    //           <Form.Text className="text-muted">
    //             We'll never share your email with anyone else.
    //           </Form.Text>
    //         </Form.Group>
    //         <Form.Group className="mb-3" controlId="formBasicCountry">
    //           <Form.Label>Select Country</Form.Label>
    //           {isLoading && (
    //             <p className="loading">Loading countries. Please wait...</p>
    //           )}
    //           <Form.Select
    //             as="select"
    //             name="country"
    //             value={selectedCountry}
    //             onChange={(event) => setSelectedCountry(event.target.value)}
    //             required
    //           >
    //             {countries.map(({ isoCode, name }) => (
    //               <option value={isoCode} key={isoCode}>
    //                 {name}
    //               </option>
    //             ))}
    //           </Form.Select>
    //         </Form.Group>
    //         <Form.Group className="mb-3" controlId="formBasicState">
    //           <Form.Label>Select State</Form.Label>
    //           <Form.Select
    //             id="state"
    //             as="select"
    //             name="state"
    //             value={selectedState}
    //             onChange={(event) => setSelectedState(event.target.value)}
    //             required
    //           >
    //             {states.length > 0 ? (
    //               states.map(({ isoCode, name }) => (
    //                 <option value={isoCode} key={isoCode}>
    //                   {name}
    //                 </option>
    //               ))
    //             ) : (
    //               <option value="" key="">
    //                 No state found
    //               </option>
    //             )}
    //           </Form.Select>
    //         </Form.Group>
    //         <Form.Group className="mb-3" controlId="formBasicState">
    //           <Form.Label>Select City</Form.Label>
    //           <Form.Select
    //             id="state"
    //             as="select"
    //             name="city"
    //             value={selectedCity}
    //             onChange={(event) => setSelectedCity(event.target.value)}
    //             required
    //           >
    //             {cities.length > 0 ? (
    //               cities.map(({ name }) => (
    //                 <option value={name} key={name}>
    //                   {name}
    //                 </option>
    //               ))
    //             ) : (
    //               <option value="">No cities found</option>
    //             )}
    //           </Form.Select>
    //         </Form.Group>
    //         <Form.Group className="mb-3" controlId="formBasicPassword">
    //           <Form.Label>Password</Form.Label>
    //           <Form.Control type="password" placeholder="Password" required />
    //         </Form.Group>
    //         <Form.Group className="mb-3" controlId="formBasiccPassword">
    //           <Form.Label>Confirm Password</Form.Label>
    //           <Form.Control
    //             type="cpassword"
    //             placeholder="Confirm Password"
    //             required
    //           />
    //         </Form.Group>
    //         <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //           <Form.Check type="checkbox" label="Check me out" required />
    //         </Form.Group>
    //         <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //           <Form.Label>
    //             {" "}
    //             <Link to="/volunteerlogin" className="decor">
    //               Click here to Login
    //             </Link>
    //           </Form.Label>
    //         </Form.Group>
    //         <Button variant="primary" type="submit" className="tocenter">
    //           SignUp
    //         </Button>
    //       </Form>
    //     </div>
    //   </div>
    //   <div className="volunteerpic">
    //     <img src={volunteer} alt="home" />
    //   </div>
    // </div>
    <>
      <div className="outer-container">
        <div className="inner-container">
          <div className="most_inner_container">
            <div className="left-side">
            <Form className="decora font1">
            <h1 className="registerheading">Join as Helping Hands</h1>
            <Form.Group className="mb-3" controlId="formBasicName">
              {/* <Form.Label className="label-font">Enter Your Name</Form.Label> */}
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
              {/* <Form.Label>Enter Mobile Number</Form.Label> */}
              <Form.Control maxLength="10" required placeholder="Enter Mobile Number"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control type="email" placeholder="Enter email" required />
              <Form.Text className="text-muted fs-5">
              <small className="font-xs">We'll never share your email with anyone else.</small>
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCountry">
              {/* <Form.Label>Select Country</Form.Label> */}
              {isLoading && (
                <p className="loading">Loading countries. Please wait...</p>
              )}
              <Form.Select
                as="select"
                name="country"
                value={selectedCountry}
                onChange={(event) => setSelectedCountry(event.target.value)}
                required
              >
                {countries.map(({ isoCode, name }) => (
                  <option value={isoCode} key={isoCode}>
                    {name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicState">
              {/* <Form.Label>Select State</Form.Label> */}
              <Form.Select
                id="state"
                as="select"
                name="state"
                value={selectedState}
                onChange={(event) => setSelectedState(event.target.value)}
                required
              >
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
            <Form.Group className="mb-3" controlId="formBasicState">
              {/* <Form.Label>Select City</Form.Label> */}
              <Form.Select
                id="state"
                as="select"
                name="city"
                value={selectedCity}
                onChange={(event) => setSelectedCity(event.target.value)}
                required
              >
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
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group  controlId="formBasiccPassword">
              {/* <Form.Label>Confirm Password</Form.Label> */}
              <Form.Control
                type="cpassword"
                placeholder="Confirm Password"
                required
              />
            </Form.Group>
            <div className="lastsection">
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" required className="font-xs"/>
            </Form.Group> */}
            <Form.Group  controlId="formBasicCheckbox">
              <Form.Label>
                {" "}
                <Link to="/volunteerlogin" className="decor">
                  Click here to Login
                </Link>
              </Form.Label>
            </Form.Group>
            </div>
            <Button variant="primary" type="submit" className="tocenter">
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
