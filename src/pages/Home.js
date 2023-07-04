import React from "react";
import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  faLinkedin,
  faEnvelope,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as faEnvelopeSolid } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Wasif Khan</h2>
        <div className="prompt">
          <p>Backend developer</p>

          <div className="icons">
            <a
              href="https://github.com/wasif32"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
            <span className="icon-spacing" />
            <FontAwesomeIcon icon={faEnvelopeSolid} className="icon" />
            <span className="icon-spacing" />
            <a
              href="https://www.linkedin.com/in/wasif-khan-713a40246/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>HTML, CSS, JavaScript, BootStrap, ReactJS</span>
          </li>

          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MongoDB</span>
          </li>

          <li className="item">
            <h2>Languages</h2>
            <span>C, C++, JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
