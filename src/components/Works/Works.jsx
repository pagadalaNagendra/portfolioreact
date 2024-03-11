// import React, { useContext } from "react";
// import "./Works.css";
// import Upwork from "../../img/Upwork.png";
// import Fiverr from "../../img/fiverr.png";
// import Amazon from "../../img/amazon.png";
// import Shopify from "../../img/Shopify.png";
// import Facebook from "../../img/Facebook.png";
// import { themeContext } from "../../Context";
// import { motion } from "framer-motion";
// import {Link} from 'react-scroll'
// const Works = () => {
//   // context
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;

//   // transition
//   return (
//     <div className="works" id="works">
//       {/* left side */}
//       <div className="w-left">
//         <div className="awesome">
//           {/* dark Mode */}
//           <span style={{ color: darkMode ? "white" : "" }}>
//             Works for All these
//           </span>
//           <span>Brands & Clients</span>
//           <spane>
//             Lorem ispum is simpley dummy text of printing of printing Lorem
//             <br />
//             ispum is simpley dummy text of printingLorem ispum is simpley dummy
//             text
//             <br />
//             y dummy text of printingLorem
//             <br />
//             ispum is simpley dummy text of printing
//           </spane>
//           <Link to="contact" smooth={true} spy={true}>
//             <button className="button s-button">Hire Me</button>
//           </Link>
//           <div
//             className="blur s-blur1"
//             style={{ background: "#ABF1FF94" }}
//           ></div>
//         </div>

//         {/* right side */}
//       </div>
//       <div className="w-right">
//         <motion.div
//           initial={{ rotate: 45 }}
//           whileInView={{ rotate: 0 }}
//           viewport={{ margin: "-40px" }}
//           transition={{ duration: 3.5, type: "spring" }}
//           className="w-mainCircle"
//         >
//           <div className="w-secCircle">
//             <img src={Upwork} alt="" />
//           </div>
//           <div className="w-secCircle">
//             <img src={Fiverr} alt="" />
//           </div>
//           <div className="w-secCircle">
//             <img src={Amazon} alt="" />
//           </div>{" "}
//           <div className="w-secCircle">
//             <img src={Shopify} alt="" />
//           </div>
//           <div className="w-secCircle">
//             <img src={Facebook} alt="" />
//           </div>
//         </motion.div>
//         {/* background Circles */}
//         <div className="w-backCircle blueCircle"></div>
//         <div className="w-backCircle yellowCircle"></div>
//       </div>
//     </div>
//   );
// };

// export default Works;

import React, { useContext } from "react";
import "./Works.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar2 from "../../img/sidebar1.png";
import Ecommerce2 from "../../img/ecommerce2.png";
import HOC from "../../img/hoc.png";
import MusicApp2 from "../../img/musicapp2.jpeg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="works">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}></span>
      <span>certificates</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar2} alt=""  className="fmml"/>
          <div className="webss"><p>Fmml</p></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce2} alt="" className="MusicApp2"/>
          <div className="webss"><p>Edunet</p></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp2} alt="" className="MusicApp2" />
          <div className="webss"><p>RCTS(IIIT)</p></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp2} alt="" className="MusicApp2" />
          <div className="webss"><p>RCTS(IIIT)</p></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
