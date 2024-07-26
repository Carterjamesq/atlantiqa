import React from "react";
import Pattern from "../../assets/Dawn.png";
import HeroImage from "../../assets/HeroImage.jpg";

const Hero = () => {
  return (
    <div className="banner section-padding">
      <div className="container">
        <div className="header-top-column">
          <img src={Pattern} alt="Pattern" />
          <h1>
            Empowering Digital Growth<br></br>
          </h1>
        </div>
        <div className="header-bottom-column">
          <h2>With Atlantiqa</h2>
          <img src={HeroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
