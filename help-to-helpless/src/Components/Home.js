import React from "react";
import '../CSS/home.css';
import { Link } from "react-router-dom";
import Together from "../PICS/together.jpg";
import Mdon from '../PICS/moneydonation.jpg';
import Gdon from '../PICS/gooddonation.jpg'
import mobdon from '../PICS/mobdonation.jpg';
import good from "../PICS/good.png";
import food from "../PICS/food.jpg";
import money from "../PICS/money.jpg";
import Donate from "../PICS/Donate.jpg";
import volunteer from "../PICS/volunteer.jpg";
import Match from "../PICS/match.png";
import Type from "./Type";
const Home = () => {
  return (
    <>
    <div className="galary">
        <img src={Mdon} alt="thfujv"/>
        <img src={Gdon} alt="thfujv" />
        <img src={mobdon} alt="thfujv" />
        <img src={Together} alt="thfujv" />
      </div>
      <div className="containers">
        <div className="main">
          <div>
            <div className="fontt">
              <h1 className="clr1">Together we can make a diffrence</h1>
            </div>
          </div>
          <div
            style={{
              paddingBottom: "30px",
              paddingTop: "20px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            <Type />
          </div>
          <div className="buttoncontainer">
            <div>
              <div className="button">
                <Link to="volunteer">
                  <button className="btn btn-primary voll">
                    JOIN AS VOLUNTEER
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="heading_first fontw">Gift Happiness</h1>
      </div>
      <div className="container1">
        <section>
          <div className="image_section">
            <img src={good} alt="good donation" />
            <h1 className="fontw fontsm">Donate Goods</h1>
          </div>
        </section>
        <section>
          <div className="image_section">
            <img src={food} alt="good donation" />
            <h1 className="fontw fontsm">Donate Food</h1>
          </div>
        </section>
        <section>
          <div className="image_section">
            <img src={money} alt="good donation" />
            <h1 className="fontw fontsm">Donate Monay</h1>
          </div>
        </section>
      </div>
      <div className="second_section">
        <div>
          <h1 className="heading_first fontw">How Can You Help</h1>
        </div>
        <div className="container2">
          <section>
            <div className="image_section">
              <img src={Donate} alt="good donation" />
              <h1 className="fontw">Donar</h1>
            </div>
          </section>
          <section>
            <div className="image_section">
              <img src={Match} alt="good donation" />
              <h1 className="fontw">Match Area wise</h1>
            </div>
          </section>
          <section>
            <div className="image_section">
              <img src={volunteer} alt="good donation" />
              <h1 className="fontw">Volunteer</h1>
            </div>
          </section>
        </div>
      </div>
      <div>
        <h1 className="fontw heading_first">Agenda</h1>
        <p></p>
        <div className="container3">
          <section>
            <div className="last_section">
              <h1>For Donors:</h1>
              <ul>
                <li>
                  <p>
                    Declutter with purpose:* Donate gently used items you no
                    longer need, giving them a second life and helping those in
                    need.
                  </p>
                </li>
                <li>
                  <p>
                    Convenient and impactful:* Create an account, list your
                    items, and let volunteers collect them, all within your
                    local area.
                  </p>
                </li>
                <li>
                  <p>
                    Transparency and trust:* View the profiles of volunteer
                    collectors and track the status of your donations, ensuring
                    they reach those who need them most.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section>
            <div className="last_section">
              <h1>For Volunteers:</h1>
              <ul>
                <li>
                  <p>
                    Become a champion of change:* Sign up as a volunteer to
                    collect donated items and make a tangible difference in your
                    community.
                  </p>
                </li>
                <li>
                  <p>
                    Flexible and rewarding:* Choose donation drives that match
                    your interests and availability, spreading joy and helping
                    those in need.
                  </p>
                </li>
                <li>
                  <p>
                    Build meaningful connections:* Interact with donors and
                    recipients, creating a network of kindness and support.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section>
            <div className="last_section">
              <h1>Key Features:</h1>
              <ul>
                <li>
                  <p>
                    Location-based matching:* Donors and volunteers connect
                    based on their proximity, streamlining the donation process.
                  </p>
                </li>
                <li>
                  <p>
                    User-friendly interface:* Simple and intuitive platform for
                    listing, requesting, and managing donations.
                  </p>
                </li>
                <li>
                  <p>
                    Safety and security:* Verified volunteer profiles and secure
                    account login ensure a safe and trustworthy experience.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      {/* <div className="hh">
      <div className="container">
  <div className="column">Column 1</div>
  <div className="column">Column 2</div>
  <div className="column">Column 3</div>
  <div className="column">Column 4</div>
</div>
      </div> */}
    </>
  );
};

export default Home;
