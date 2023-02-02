import React from 'react'
import { useEffect, useState} from "react";
import './Home.css'
import image1 from "../Assets/image1.jpg"
import img2 from "../Assets/img2.jpg"
import image3 from "../Assets/image3.jpg"
import image7 from "../Assets/image7.jpg"
import image9 from "../Assets/image9.jpg"
import Destination from '../Components/Destination';
import Trip from '../Components/Trip';

export default function Gallary() {
    const [selectedImage, setSelectedImage] =useState(0)
    const [allImages, setAllImages] = useState([image1, img2, image3, image7, image9])

    useEffect (() => {
        setInterval(() => {
            setSelectedImage(selectedImage => selectedImage < 4 ? selectedImage + 1 : 0)
        },4000)
    }, [] )
  return (
    <>
    <Destination/>
    <Trip/>
    
    <div id="home-section">

    <div className="banner">  

   <span className="Gomago" >
      <h1 className="text">Welcome to Gomago Tours and Travel</h1>
      <img width={1366} height={464.3} src={allImages[selectedImage]} alt="" className="todo"/> <br/>
   </span>
</div> 
    </div>
  
      
    
    </>
   
  )
}