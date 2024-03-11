import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses2 from "../../img/glasses2.jpeg";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';


const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}></span>
        <span>Resume</span>
        <br/>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem  ispum is simpley dummy text of printing
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}

      <div className="cards">
          <div className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
      <div className="res">
      <img src="https://res.cloudinary.com/dxoq1rrh4/image/upload/v1696188463/resume2222_pie2em.png" alt="" />
      </div>
    </div>
  );
};

export default Services;

