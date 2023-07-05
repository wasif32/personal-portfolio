import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <i className="material-icons">reorder</i>
        </button>
      </div>
      <div className="links">
        <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
        <Link to={process.env.PUBLIC_URL + "/projects"}>Projects</Link>
        <Link to={process.env.PUBLIC_URL + "/experience"}>Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;
