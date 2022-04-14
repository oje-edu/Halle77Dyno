import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "../api/axios";

import { MdOutlineCarRepair } from "react-icons/md";
import { MdOutlineSpeed } from "react-icons/md";
import { MdOutlineLanguage } from "react-icons/md";
import { MdOutlineBarChart } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

import logo from "../assets/img/halle77.png";

const CARS_URL = "/cars";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const [data, setData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    axios.get(CARS_URL).then((response) => {
      setData(response.data.cars);
    });
  }, []);

  const countCars = data?.length;

  const menuItems = [
    {
      text: "Kennzeichen",
      icon: <MdOutlineLanguage size={28} />,
      link: "/",
    },
    {
      text: "Episoden",
      icon: <AiOutlineYoutube size={28} />,
      link: "/episoden",
    },
    {
      text: "Messungen",
      icon: <MdOutlineSpeed size={28} />,
      link: "/autos",
    },
    {
      text: "Statistik",
      icon: <MdOutlineBarChart size={28} />,
      link: "/charts",
    },
  ];

  // console.log(countCars);

  if (!data) return null;
  return (
    <nav className="shadow-lg bg-secondary text-primary-dark">
      <div className="mx-auto md:px-4 md:max-w-6xl">
        <div className="justify-between lg:flex">
          <div className="flex items-center justify-evenly space-x-7">
            <Link to="/" className="flex items-center py-4 space-x-6">
              <img src={logo} alt="Logo" className="w-14 md:w-16" />
              <span className="text-lg font-semibold text-primary-dark">
                Eure Autos auf der Rolle!
              </span>
            </Link>
          </div>
          <div className="items-center justify-center hidden space-x-4 md:flex">
            {menuItems.map((item) => (
              <Link
                to={item.link}
                key={item.link}
                className={
                  location.pathname === item.link
                    ? "items-center border-b-2 border-t-2 border-primary-dark text-orange-600 hover:text-primary-dark hover:border-orange-600 duration-500"
                    : "flex hover:text-orange-600 duration-500"
                }
              >
                <div className="flex items-center space-x-1">
                  {item.icon}
                  <span className="">{item.text}</span>
                </div>
              </Link>
            ))}
            <div className="items-center hidden space-x-4 md:flex">
              <a
                href="https://hd-autos.de/pruefstand/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center duration-500 text-primary-dark hover:text-orange-600 "
              >
                <MdOutlineCarRepair size={28} />
                <span className="ml-2">Prüfstand</span>
              </a>
            </div>
          </div>

          <div className="flex justify-center md:hidden">
            <button onClick={toggle} className="menu-button">
              {!open ? (
                <FaBars size={28} style={{ fill: "#ea580c" }} />
              ) : (
                <MdOutlineClose size={32} style={{ fill: "#ea580c" }} />
              )}
            </button>
          </div>

          <div className={open ? "mobile-menu" : "hidden"}>
            <ul className="">
              {menuItems.map((item) => (
                <li key={item.link} className="active">
                  <Link
                    to={item.link}
                    className={
                      location.pathname === item.link
                        ? "flex items-center py-2 text-xl font-thin font-text border-b-[1px] border-t-[1px] border-primary-dark text-orange-600 duration-500"
                        : "flex items-center py-2 text-xl font-thin font-text  text-primary-dark duration-500"
                    }
                    onClick={toggle}
                  >
                    {item.icon}
                    <span className="pl-2">{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
