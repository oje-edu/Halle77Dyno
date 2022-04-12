import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex items-center mt-auto h-36 justify-evenly footer bg-secondary">
      <div>
        <a
          href="https://github.com/oje-edu/Halle77Dyno"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="" size="2.25em" color="#94a3b8" />
        </a>
      </div>
      <div className="p-2 rounded bg-primary-dark text-secondary">
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
