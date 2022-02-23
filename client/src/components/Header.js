import React from "react";

import logo from "../assets/img/halle77.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a
          href="https://hd-autos.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="links">
        <a href="/">Start</a>
        <a href="/episoden">Episoden</a>
      </div>
    </div>
  );
};

export default Header;
