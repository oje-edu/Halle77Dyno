import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaRegSmileWink } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <a
          href="https://github.com/oje-edu/Halle77Dyno"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="github-icon" size="2.25em" color="white" />
        </a>
      </div>
      <div className="yo">
        <a href="https://oje.guru/" target="_blank" rel="noopener noreferrer">
          <p style={{ padding: "0 10px" }}>©2022</p>
          <FaRegSmileWink className="smile-icon" size="2.25em" color="white" />
          <p p style={{ padding: "0 10px" }}>
            till now
          </p>
        </a>
      </div>
      <div className="links">
        <a
          href="https://halle77api.oje.guru/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          API
        </a>
      </div>
    </div>
  );
};

export default Footer;
