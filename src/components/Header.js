import { useState, useEffect } from "react";
import axios from "../api/axios";

import logo from "../assets/img/halle77.png";

const CARS_URL = "/cars";

const Header = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(CARS_URL).then((response) => {
      setData(response.data.cars);
    });
  }, []);

  const countCars = data?.length;

  // console.log(countCars);

  if (!data) return null;
  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="links">
        <a href="/episoden">Episoden</a>
        <div className="badgeWrapper">
          <a href="/autos">
            Messungen
            <span className="badge">{countCars}</span>
          </a>
        </div>
        <a
          href="https://hd-autos.de/pruefstand/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prüfstand
        </a>
      </div>
    </div>
  );
};

export default Header;
