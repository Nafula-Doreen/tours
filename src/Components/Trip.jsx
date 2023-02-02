import './Trip.css'
import TripData from './TripData'
import Trip2 from '../Assets/Trip2.jpg'
import Trip4 from '../Assets/Trip4.jpg'
import Trip1 from '../Assets/Trip1.jpg'

function Trip() {
  return (
    <div className='trip'>
        <h1>Recent Trips</h1>
        <p>Discover your destination using Google maps.</p>

        <div className="tripcard">
            <TripData 
            image={Trip2}
            heading="Trip in Kenya"
            text="orem ipsum, dolor sit amet consectetur adipisicing elit.
            Error, labore perferendis ullam quod voluptatum possimus 
            quidem natus in corrupti tenetur, eaque, vero expedita aspernatur
             dicta rerum debitis omnis quaerat laudantium ad odio est! Consequatur
             exercitationem commodi fugiat, quas natus unde suscipit ullam quia aliquid
             amet, magni rerum sequi quis adipisci?"
            />
            <TripData 
            image={Trip4}
            heading="Trip in Uganda"
            text="orem ipsum, dolor sit amet consectetur adipisicing elit.
            Error, labore perferendis ullam quod voluptatum possimus 
            quidem natus in corrupti tenetur, eaque, vero expedita aspernatur
             dicta rerum debitis omnis quaerat laudantium ad odio est! Consequatur
             exercitationem commodi fugiat, quas natus unde suscipit ullam quia aliquid
             amet, magni rerum sequi quis adipisci?"
            />
            <TripData 
            image={Trip1}
            heading="Trip in Tanzania"
            text="orem ipsum, dolor sit amet consectetur adipisicing elit.
            Error, labore perferendis ullam quod voluptatum possimus 
            quidem natus in corrupti tenetur, eaque, vero expedita aspernatur
             dicta rerum debitis omnis quaerat laudantium ad odio est! Consequatur
             exercitationem commodi fugiat, quas natus unde suscipit ullam quia aliquid
             amet, magni rerum sequi quis adipisci?"
            />
            
        </div>

    </div>
  )
}

export default Trip