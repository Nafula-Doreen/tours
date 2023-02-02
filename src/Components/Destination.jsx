import Img5 from '../Assets/Img5.jpg'
import Img from '../Assets/Img.jpg'
import Trip4 from '../Assets/Trip4.jpg'
import Trip1 from '../Assets/Trip1.jpg'
import './Destination.css'
import DestinationData from '../Components/DestinationData'


const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot within a time frame.</p>

     <DestinationData className="first-des"
     heading="Masaai Mara"
      text="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Error, labore perferendis ullam quod voluptatum possimus 
      quidem natus in corrupti tenetur, eaque, vero expedita aspernatur
       dicta rerum debitis omnis quaerat laudantium ad odio est! Consequatur
       exercitationem commodi fugiat, quas natus unde suscipit ullam quia aliquid
       amet, magni rerum sequi quis adipisci?"
       img1={Trip4}
       img2={Img}

       
     
     
     />
     
     <DestinationData className="first-des-reverse"
     heading="Mt. Kilimanjaro"
      text="Gomago Tours and Travel takes you to your favourite destination
            where the popular destination was mt. kilimanjaro where the Gom-
            go guides guide the travels to be able to climb on top of mt. k-
            ilimanjaro. which it was a happy and fun experience with the Gomago
            happy clients."

       img1={Trip1}
       img2={Img5}

       
     
     
     />


     
    </div>
  )
}

export default Destination