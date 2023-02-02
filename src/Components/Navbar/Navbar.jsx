import { Component } from "react";
import go from '../../Assets/go-01.png'
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
         <nav>
          <div className="index.html">
           <img src={go} alt="go-01" />
          </div>

          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a className="active" href="/home">
                  Home
                </a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/Packages">Packages</a>
              </li>
              {/* <li>
                <a href="/destination">Destination</a>
              </li> */}
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav> 
        <div className="bg">
          <h1>hey</h1>
        </div>
      </>
    );
  }
}

export default Navbar;

