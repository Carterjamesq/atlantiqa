import React from "react";
import Logo from "../../assets/logo.svg";
import WhatsappIco from "../../assets/whatsapp-icon.svg";
import DribbbleIco from "../../assets/dribbble-icon.svg";
import LinkedinIco from "../../assets/linkedin-icon.svg";
import BehanceIco from "../../assets/behance-icon.svg";

const Header = () => {
  return (
    <header className="container-full divider">
      <div className="nav">
        <a className="brand" href="/">
          <img src={Logo} alt="Atlantiqa" />
        </a>
        <div className="navigation">
          <ul className="nav-list">
            <li>
              <a href="#!">Services</a>
            </li>
            <li>
              <a href="#!">Portfolio</a>
            </li>
            <li>
              <a href="#!">About</a>
            </li>
            <li>
              <a href="#!">Contact</a>
            </li>
            <li>
              <a href="#!">Blog</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="social">
        <ul>
          <li>
            <a href="#!">
              <img src={WhatsappIco} />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={DribbbleIco} />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={LinkedinIco} />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={BehanceIco} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
