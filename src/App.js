import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Route, Routes} from "react-router-dom"
import './App.css'
import About from './Pages/About.jsx'
import Packages from './Pages/Packages'
import Home from './Pages/Home'
import Contact from './Pages/Contact'



function App() {
  return (
    <div>
      <Navbar/>
      
  
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/packages' element={<Packages/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
   <Footer/>
    
 
     

      
      
    </div>
  )
}

export default App