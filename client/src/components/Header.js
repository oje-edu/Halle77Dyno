import React from "react";

import logo from "../assets/img/halle77.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
