import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "../api/axios";

import { MdOutlineCarRepair } from "react-icons/md";
import { MdOutlineSpeed } from "react-icons/md";
import { MdOutlineLanguage } from "react-icons/md";
import { MdOutlineBarChart } from "react-icons/md";
import { AiOutlineYoutube } from "react-icons/ai";

import logo from "../assets/img/halle77.png";

const CARS_URL = "/cars";

const Header = () => {
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
        icon: <MdOutlineLanguage color="secondary" />,
        link: "/",
      },
      {
        text: "Episoden",
        icon: <AiOutlineYoutube color="secondary" />,
        link: "/episoden",
      },
      {
        text: "Messungen",
        icon: <MdOutlineSpeed color="secondary" />,
        link: "/autos",
      },
      {
        text: "Statistik",
        icon: <MdOutlineBarChart color="secondary" />,
        link: "/charts",
      },
    ];

  // console.log(countCars);

  if (!data) return null;
  return (
    <header className="w-full font-semibold ">
      <div className=" bg-secondary text-primary-dark">
        <nav>
          <div className="items-center justify-between md:flex">
            <div className="flex items-center p-2 md:ml-8">
              <Link to="/">
                <img src={logo} alt="logo" className="w-20 md:w-36" />
              </Link>
              <span className="pl-2 text-xl font-text md:text-4xl">
                Eure Autos auf der Rolle!
              </span>
            </div>
            <ul className="ml-2 md:p-4 md:flex">
              {menuItems.map((item) => (
                <li key={item.text}>
                  <div
                    className={
                      location.pathname === item.link
                        ? "bg-primary-dark text-secondary hover:text-primary-dark hover:bg-secondary hover:border hover:border-primary-dark rounded-md p-2 items-center  mr-8 flex duration-500"
                        : "items-center p-2 mr-8 flex duration-500 hover:text-primary-dark hover:bg-secondary hover:border hover:border-primary-dark rounded-md"
                    }
                  >
                    {item.icon}
                    <Link className="ml-2" to={item.link}>
                      {item.text}
                    </Link>
                  </div>
                </li>
              ))}
              <li>
                <div className="flex items-center p-2 mr-8 duration-500 rounded-md hover:text-primary-dark hover:bg-secondary hover:border hover:border-primary-dark">
                  <MdOutlineCarRepair color="secondary" />
                  <a
                    href="https://hd-autos.de/pruefstand/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 "
                  >
                    Prüfstand
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="hidden px-16 py-6">
          <div className="flex justify-center md:justify-end">
            <a href="#">Login</a>
            <a href="#" className="ml-2">
              Registrieren
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
