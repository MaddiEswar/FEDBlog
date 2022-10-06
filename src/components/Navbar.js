import React from "react";
import about from "./about.js";

const Navbar = () => {
  return (
    <div className="menu">
      <div className="logo">
        
        <a href="" >  
          <img src="https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo" width="80px" alt="image" />  
        </a>
          
      
      </div>
      <div className="nav-menu">
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about" >ABOUT</a>
         
          </li>
          <li>
            <a href="#work">PORTFOLIO</a>
          </li>
          <li>
            <a href="#clients">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
