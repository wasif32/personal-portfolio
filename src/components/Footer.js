import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <i className="fab fa-linkedin icon large"></i>
        <span className="icon-spacing"></span>
        <i className="far fa-envelope icon large"></i>
        <span className="icon-spacing"></span>
        <i className="fab fa-github icon large"></i>
      </div>
      <p>&copy; 2023 Wasif Khan</p>
    </div>
  );
}

export default Footer;
