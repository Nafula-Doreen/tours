import React from 'react'
import './Footer.css'
import bamboo from '../../Assets/bamboo.png'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import {AiOutlineCopyright} from 'react-icons/ai'

function Footer() {
  return (
    <div className='footer-container'>
    <footer>
      <div className="row">
        <div className="col">
          <img src={bamboo} alt="bamboo" className='logo' />
          <p>Your Journey Your Story</p>
        </div>
        <div className="col">
          <h3>Office</h3>
          <p>Ngara Road</p>
          <p className='email-id'>gmkule@gmail.com</p>
          <h4>+254 0713861136</h4>

        </div>
        <div className="col">
          <h3>Links</h3>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Destination</a></li>
            <li><a href="">Contact</a></li>
            
          </ul>
        </div>
        <div className="col">
          <h3>Newsletter</h3>
          <form>
         < HiOutlineMail/>
            <input type="email" placeholder='Enter your email id' required />
            <button type='submit'>< AiOutlineArrowRight className='icon'/></button>
          </form>

          <div className="social-icons">
         < BsFacebook className='fab'/>
         <AiFillInstagram className='ig'/>
         <IoLogoWhatsapp className='whats'/>
          </div>
        </div>
      </div>
      <hr />
      <p className='copyright'>Gomago Tours and Travel <AiOutlineCopyright/> 2022. Developed by Doreen Nafula</p>
    </footer>
      
    
  
      
       

    </div>
  )
}

export default Footer