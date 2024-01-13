import React from 'react'
import '../CSS/about.css'
import Approach from '../PICS/approach.jpg'
import vision from '../PICS/vision.jpg'
import process from '../PICS/processs.jpg'
// import Login from './Login'
const About = () => {
  return (
    <>
      <div className='About_container'>
        <div>
          <div className='heading_section'>
            <h1 className='font1'>About Us</h1>
            <p className='font1'>#join the mission of <span className='madad font2'>MADAD</span></p>
          </div>
          <div>
            <div className='inner_container1'>
            <section>
              <h1 className='font3 double_line'>OUR VISION</h1>
              <div className='paragraph'>
              <p >Donation is an act of giving, driven by compassion and a desire to make a positive impact on the lives of others.
              Whether in the form of money, goods, time, or expertise, donations play a crucial role.
              Our Vision is to Help those people who can't afford daily life things easily.</p>
              </div>
            </section>
            <section className='about_image_section leftt'>
              <img src={vision} alt="ur vision"  />
            </section>
            </div>
            <div className='inner_container2'>
            <section className='about_image_section'>
            <img src={Approach} alt="our vision"  />
            </section>
            <section>
              <h1 className='leftt double_line'>OUR APPROACH</h1>
              <div className='paragraph left_aaproach'>
              <p >As a donar you only need to register yourself in the site, and also add the details of your donation like quality and quantity.
              Our Volunteer who register with us they approch you after your city and the volunteer city match.
              They Contact you and store your donation and they will donate the things accordingly in the city.
              After the Successfull Donation distributed we add pics on the site you can see them by entaring Your mobile number in Portal.  </p>
              </div>
            </section>
            </div>
            <div className='inner_container3'>
            <section>
              <h1 className='double_line'>OUR PROCESS</h1>
              <div className='paragraph'>
              <p>The Process is very Simple and easy to use "MADAD" website first REGISTER -> LOGIN -> Add Donation Item -> Talk with Volunteer -> Give them the item.
              Wait for Some time and all set.</p>
              </div>
            </section>
            <section className='about_image_section leftt'>
            <img src={process} alt="ur vision"  />
            </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About