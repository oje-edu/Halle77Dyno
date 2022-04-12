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
      {
        text: "Prüfstand",
        icon: <MdOutlineCarRepair color="secondary" />,
        link: '"https://hd-autos.de/pruefstand/" target="_blank" rel="noopener noreferrer"',
      },
    ];

  // console.log(countCars);

  if (!data) return null;
  return (
    <div className="w-full">
      <div className=" bg-secondary text-primary-dark">
        <nav>
          <div className="items-center justify-between md:flex">
            <div className="p-2 md:ml-8">
              <Link to="/">
                <img src={logo} alt="logo" className="w-20 md:w-36" />
              </Link>
            </div>
            <ul className="ml-2 md:p-4 md:flex">
              {menuItems.map((item) => (
                <li key={item.text}>
                  <div
                    className={
                      location.pathname === item.link
                        ? "bg-primary-dark text-secondary rounded-md p-2 items-center  mr-8 flex"
                        : "items-center p-2 mr-8 flex"
                    }
                  >
                    {item.icon}
                    <Link className="ml-2" to={item.link}>{item.text}</Link>
                  </div>
                </li>
              ))}
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
          <header>
            <h2 className="text-bold">Eure Autos auf der Rolle</h2>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Header;
