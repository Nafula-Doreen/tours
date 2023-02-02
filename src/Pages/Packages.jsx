import React from 'react'
import Hero from '../Components/Hero'
import service from '../Assets/service.jpg'
import './Packages.css'
import Trip2 from '../Assets/Trip2.jpg'
import Trip1 from '../Assets/Trip1.jpg'
import Trip4 from '../Assets/Trip4.jpg'
import Trip5 from '../Assets/Trip5.jpg'
import Trip7 from '../Assets/Trip7.jpg'
import Trip8 from '../Assets/Trip8.jpg'
import Services from '../Components/Services'

function Packages() {
  return (
    <div>
   
        

<Hero 
    cName="hero"
    heroImg={service}
    title="Packages"

    btnClass="hide"
    
    />

    <section className="packages" id="packages">
      


      <div className="box-container">

        <div className="box">
          <img src={Trip2} alt="trip" />
        </div>
        <div className="content">
          <h3> <i class="fas fa-map-marker-alt"></i> Elementaitor</h3>
          <p>1 Day visiting lake Elementaitor and viewing the flamingos</p>

             <div className="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
             </div>
        </div>

      </div>
      <div className="box-container">

        <div className="box">
          <img src={Trip1} alt="trip" />
        </div>
        <div className="content">
          <h3> <i class="fas fa-map-marker-alt"></i> Mt Kilimanjaro</h3>
          <p>Offer a 2-3day, a week or a month to travel to Kilimanjaro in their
            they offer different activities eg 1. Hike to Materuni Waterfall and 
            swim in its pool · 2. Go on a Kilimanjaro coffee plantation tour · 3.
            Take a dip in Kikuletwa Hot Springs.
          </p>

             <div className="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
             </div>
            
        </div>

      </div>
      <div className="box-container">

        <div className="box">
          <img src={Trip8} alt="trip" />
        </div>
        <div className="content">
          <h3> <i class="fas fa-map-marker-alt"></i> Queen Elizabeth National Park(UG)</h3>
          <p>Popular activities include chimp tracking in Kyambura Gorge, boat cruises, 
            guided game drives including to view tree climbing lions in the Ishasha sector,
            night drives and nature walks. Visitors can also go on a lion experience with 
            the Uganda Carnivore Program, with proceeds going toward carnivore conservation.</p>

             <div className="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
             </div>
            
        </div>

      </div>
      <div className="box-container">

        <div className="box">
          <img src={Trip4} alt="trip" />
        </div>
        <div className="content">
          <h3> <i class="fas fa-map-marker-alt"></i> Amboseli National Park</h3>
          <p>1-3 Days interracting with the Masaai culture and also
            we offer scount camping and bonfire
          </p>

             <div className="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
             </div>
            
        </div>

      </div>
      <div className="box-container">

        <div className="box">
          <img src={Trip5} alt="trip" />
        </div>
        <div className="content">
          <h3> <i class="fas fa-map-marker-alt"></i> Amusement Park in Tz</h3>
          <p>The park offers a wide range of kid-friendly activities for
            both the wet and wild adventurer. Enjoy the theme park where you
            can enjoy coasters, merry go round, super jets, bungee jumping, and
            several other facility for more information visit our office.
          </p>

             <div className="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
             </div>
        </div>

      </div>
      <div className="box-container">

        <div className="box">
          <img src={Trip7} alt="trip" />
        </div>
        <div className="content">
          <h3> <i class="fas fa-map-marker-alt"></i> Uganda Equator</h3>
          <p>A 1 Day Equator in Uganda. Bus Tours from $128.21 per adult.
            It is a place where you can stand in both hemispheres. it is
            a landmark in Uganda for tourists.
          </p>

             <div className="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
             </div>
        </div>

      </div>
     

      
    </section>
    <Services/>
    

    </div>
  )
}

export default Packages