import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar3.png";
import Ecommerce from "../../img/ecommerce3.png";
import HOC from "../../img/hoc2.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}></span>
      <span>Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        grabCursor={true}
        className="portfolio-slider"
      >
         <SwiperSlide>
          <img src={HOC} alt="" className="yas" />
          <div className="web"><p>K-hub website</p></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" className="yas"  />
          <div className="web"><p>Portfolio</p></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sidebar} alt="" className="yas" />
          <div className="web"><p>Face Recognition</p></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
          <div className="web"><p>Data visullazation</p></div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Portfolio;
