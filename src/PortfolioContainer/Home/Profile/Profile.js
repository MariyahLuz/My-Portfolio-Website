import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/MariyahLuz">
                <i className="fa fa-github fa-lg "></i>
              </a>
              <a href="https://www.instagram.com/mariyah.luz/">
                <i className="fa fa-instagram fa-lg"></i>
              </a>
              <a href="https://www.linkedin.com/in/luzinda-maria-002414222/">
                <i className="fa fa-linkedin fa-lg"></i>
              </a>
              <a href="https://twitter.com/LuzindaMariyah">
                <i className="fa fa-twitter fa-lg"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello , I'M{" "}
              <span className="highlighted-text">BALUNGA MARIAM</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "IT Specialist 😎",
                    1020,
                    "Front-End Developer 💻",
                    1020,
                    "Reactjs Dev📱",
                    1020,
                    "Enthusiastic Entrepreneur  🔴",
                    1020,
                    "Leader && Innovator 🌐",
                    1020,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                An Enthusiastic IT Specilist with a bachelors degree in Computer Science.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
            <a href="maria_cv.pdf" download="MARIYAH maria_cv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
