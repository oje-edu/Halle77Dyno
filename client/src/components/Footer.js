import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://github.com/oje-edu/Halle77Dyno"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub className="github-icon" size="2em" color="white" />
      </a>
    </div>
  );
};

export default Footer;
