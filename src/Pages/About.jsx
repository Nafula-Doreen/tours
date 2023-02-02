import React from 'react'
import './About.css'
import Hero from '../Components/Hero'
import Img from '../Assets/Img.jpg'
import image10 from '../Assets/image10.jpg'


function About() {
  return (
    <>

    <Hero 
    cName="hero"
    heroImg={image10}
    title="About Us"
    // text="Choose Your Favourite Destination."
    // buttonText="Travel Plan"
    // url="/"
    btnClass="hiden"
    
    />
    
   <div className="section" id="About">
   
    <div className="columns">
      <div className="column">
        <div className="text-right">
          <h2>Our Story</h2>
          <p>Gomago Tours and Travel is a Travel Limited Company which it
            has been in existance since 2019 till date which mark it 3 years.
            Gomago Tours offer Holiday packages, bus hire and wildlife safaris
            within East Africa i.e: Kenya, Uganda and Tanzania. Our experience,
            dedication, professionalism, commitment and reliability have made us
            the most preferred and reliable Tour Operator. Our promise to you since
            2019 is a hearty, quality, and unique service that gives you value for
            money.<br/>
            <br/>

          Our speciality is the ability to offer buses which makes
          the travelers to travel comfortable and relaxed also make
          them feel safe while traveling within East Africa with our
          Gomago Tour members. Our Tour guide are well highly trained
          to adventure andthe offer safety for clients.
          <br/>
          We offer a one day, 2-3day, a week and also a month trip inside 
          and outside Kenya.
          </p>
        </div>
        <div className="text-left">
          <img src={Img} alt="img"/>
       
        </div>
      </div>
       {/* <div className="content">
        <h6>Our Mission</h6>
        
        
      </div> */}
      {/* <div className="content"> */}
        {/* <h6>Our vission</h6> */}
      {/* </div> */}
       
    </div>
    
   </div>
    </>
  )
}

export default About