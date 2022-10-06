import React from "react";
import "../myStyles.css";
const Footer = () => {
  return (
    <div>
      <div className="footer ">
        <div className="footer-content">
            <h3>FED Blog</h3>
            <p>Page Credits : Eswar 20BQ1A05C2</p>
            <p>copyright &copy; {new Date().getFullYear()} <a href=""> FED Blog</a>  </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
