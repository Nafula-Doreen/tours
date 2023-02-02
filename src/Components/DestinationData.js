import { Component } from 'react';
import './Destination.css'

import  Img from '../Assets/Img.jpg'

class DestinationData extends Component{
  render(){
    return(
      <div className={this.props.className}>
      <div className="des-text">
        <h2>{this.props.heading}</h2>
        <p>{this.props.text}</p>
      </div>


      <div className="Desty">
        <img src={this.props.img1} alt="Img" />
        <img src={this.props.img2} alt="mt" />
      </div>
      
      
    </div>
    
  
    )
  }
}

export default DestinationData
            
         