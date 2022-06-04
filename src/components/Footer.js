import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

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
            <AiFillGithub className="footerIcon" size="2.25em" />
          </a>
        </div>
        <div className="">
          <a
            href="https://www.facebook.com/Halle77-Dyno-102373999155922"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="footerIcon" size="2.25em" />
          </a>
        </div>
        <div className="">
          <a
            href="https://halle77api.oje.guru/api"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbApi className="footerIcon" size="2.25em" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
