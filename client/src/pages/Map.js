import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import * as L from "leaflet";
import Header from "../components/Header";
import Footer from "../components/Footer";

import axios from "../api/axios";
const PLATES_URL = "/plates";

const position = [51.1657065, 10.452764000000002];

//  Create the Icon
const LeafIcon = L.Icon.extend({
  options: {},
});

const blueIcon = new LeafIcon({
    iconUrl:
      "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF",
  }),
  greenIcon = new LeafIcon({
    iconUrl:
      "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF",
  });

const Map = () => {
  const [plates, setPlates] = useState(null);
  //  Use the state hook:
  const [icon, setIcon] = useState(blueIcon);

  // This function will change the state's icon:

  const changeIconColor = (icon) => {
    if (icon.options.iconUrl === greenIcon.options.iconUrl) {
      setIcon((current) => (current = blueIcon));
    } else {
      setIcon((current) => (current = greenIcon));
    }
  };

  useEffect(() => {
    axios.get(PLATES_URL).then((response) => {
      setPlates(response.data);
      //console.log(response.data);
    });
  }, []);

  if (!plates) return null;

  function distance(lat1, lon1, lat2, lon2, unit) {
    if (lat1 === lat2 && lon1 === lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit === "K") {
        dist = dist * 1.609344;
      }
      if (unit === "N") {
        dist = dist * 0.8684;
      }
      return Math.round(dist);
    }
  }

  return (
    <div>
      <Header />
      <MapContainer className="map" center={position} zoom={6}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {plates.map((plate) => (
          <Marker key={plate.kz} position={[plate.lat, plate.lng]} icon={icon}>
            (if)
            <Popup>
              <div>
                <h2>Kennzeichen: {plate.kz}</h2>
                <p>
                  {plate.name} -{" "}
                  {distance(
                    plate.lat[252],
                    plate.lng[252],
                    plate.lat,
                    plate.lng,
                    "K"
                  )}
                  km Luftlinie
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <Footer />
    </div>
  );
};

export default Map;
