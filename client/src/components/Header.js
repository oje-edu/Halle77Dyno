import React from "react";

import logo from "../assets/img/halle77.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="links">
        <a href="/episoden">Episoden</a>
        <a
          href="https://shop.halle-77.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop
        </a>
      </div>
    </div>
  );
};

export default Header;
