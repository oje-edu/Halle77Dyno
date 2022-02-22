import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      Help{" "}
      <a
        href="https://github.com/oje-edu/Halle77Dyno"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub />
      </a>{" "}
      welcome
    </div>
  );
};

export default Footer;
