import './App.css';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Header';
import About from './Components/About';
import Donation from './Components/Donation';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Volunteer from './Components/Volunteer';
import VolunteerLogin from './Components/VolunteerLogin';
// import NoPage from './Components/NoPage';
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route>
          <Route/>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="donation" element={<Donation />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="signup" element={<Signup />} />
          <Route exact path="volunteer" element={<Volunteer />} />
          <Route exact path="volunteerlogin" element={<VolunteerLogin />} />
          {/* <Route path="*" element={<NoPage />}/> */}
        </Route> 
      </Routes>

    </BrowserRouter>
  );
}

export default App;
