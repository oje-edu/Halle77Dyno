import React from "react";
import { AiFillGithub } from "react-icons/ai";

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
      <div className="links">
        <a
          href="https://halle77api.oje.guru/"
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
