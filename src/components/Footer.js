import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full shadow-lg bg-secondary text-primary-dark">
      <div className="flex justify-around p-2 md:justify-evenly">
        <div className="">
          <a
            href="https://github.com/oje-edu/Halle77Dyno"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="" size="2.25em" color="#94a3b8" />
          </a>
        </div>
        <div className="p-2 duration-500 bg-secondary text-primary-dark hover:text-orange-600">
          <a
            href="https://halle77api.oje.guru/api"
            target="_blank"
            rel="noopener noreferrer"
          >
            API
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
