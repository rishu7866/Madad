import React from "react";
import "../CSS/donation.css";
const Donation = () => {
  return (
   <>
      <div className="contact-container">
      <h2>Donation Details</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
          ></textarea>
        </div>
        <button type="submit" className="donationbtn">Send</button>
      </form>
    </div>
    
   </>
  );
};

export default Donation;
