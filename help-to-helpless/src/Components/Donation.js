import React, { useState } from "react";
import "../CSS/donation.css";
import axios from 'axios'
const Donation = () => {
  const data={
    fname:"",
    email:"",
    message:""
  }
  const [inputData,setInputData]=useState(data)
  const handleData=(e)=>{
    setInputData({...inputData,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('https://ap-south-1.aws.data.mongodb-api.com/app/data-ozyig/endpoint/data/v1', {inputData})
    .then((response)=>{
      console.log(inputData)
        console.log(response)
  }).catch((error)=>console.log(error))
}
  return (
    <>
    <div className="donouter">
    <div className="contactcontainer">
        <h2>Donation Details</h2>
        <form className="contact-form" method="post" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="fname" placeholder="Your name" value={inputData.fname} onChange={handleData}/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={inputData.email}
              onChange={handleData}
              placeholder="Your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={inputData.message}
              onChange={handleData}
              placeholder="Your message"
            ></textarea>
          </div>
          <button>
            Send
          </button>
        </form>
      </div>
    </div>
    </>
  )
};

export default Donation;
