import { useState, useEffect } from "react";
import axios from "../api/axios";

import logo from "../assets/img/halle77.png";

const MESSUNGEN_URL = "/messungen";

const Header = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(MESSUNGEN_URL).then((response) => {
      setData(response.data.data);
      // console.log(response.data.data);
    });
  }, []);

  const countCars = data?.length;

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
          href="https://shop.halle-77.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop
        </a>
      </div>
    </div>
  );
};

export default Header;
