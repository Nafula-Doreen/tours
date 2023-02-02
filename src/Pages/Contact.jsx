

import React from 'react'
import Hero from "../Components/Hero"
import contact from '../Assets/contact.jpg'

import './Contact.css'

function Contact() {
  return (
    <div>

<Hero 
    cName="hero"
    heroImg={contact}
    title="contact"

    btnClass="hide"
    
    />
     
     
      <div className="txt">
        <h2>Get in Touch</h2>
        <hr/>
        <p>We have a team of Gomago Specialist who are expaerts<br/>
        and excellent communicators. So if you're just curious<br/>
        about going on safari, or you'd like to get started on planning<br/>
        your Tanzania, Kenya and Uganda adventure right away, we are here<br/>
        to help you, </p>
      </div>
      <div className="frms">
        <h2>Our Office</h2>
        <hr />
        <div className="add">
          <h3><i class="fas fa-map-marker-alt"></i><span>Address:</span><span className='loc'>Ngara Road, Kenya</span></h3>
        </div>
        <br/>
        
        <div className="add">
          <h3><i class="fa-solid fa-phone"></i><span></span>Phone/Whatsapp:<span className='loc'>+254 713861136/ +254 712478358</span></h3>
        </div> 
        <br/>
        <div className="add">
          <h3><i class="fa-solid fa-envelope"></i><span>Email:</span><span className='loc'>gmkule@gmail.com</span></h3>
        </div>
        <br/>

        <div className="buss">
          <h2>Business Hours</h2>
          <hr />
          <div className="add">
            
          <h3><i class="fa-regular fa-clock"></i>Monday - Friday @ 08:30 - 17:00</h3><br/>
          <h3><i class="fa-regular fa-clock"></i>Saturday @ 09:00 - 13:00</h3><br/>
          <h3><i class="fa-regular fa-clock"></i>Sunday & Public Holiday - Closed</h3>
            
          </div>
        </div>

      </div>
      


    </div>
  )
}

export default Contact