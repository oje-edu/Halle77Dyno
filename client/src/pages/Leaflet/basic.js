import { useState, useRef } from "react";
import {
  MapContainer,
  SVGOverlay,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import { Icon } from "leaflet";
import plates from "../../data/plates.json";

export const icon = new Icon({
  iconUrl: "../images/logo.png",
  iconSize: [25, 25],
});

export default function BasicMap() {
  console.log(plates);
  const [baseLocation, setBaseLocation] = useState([51.5072, 7.49142]);
  return (
    <MapContainer center={baseLocation} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {plates.kz.map((plate) => (
        <Marker
          position={[
            plate.properties.coordinates[0],
            plate.properties.coordinates[1],
          ]}
        />
      ))}
      ;
    </MapContainer>
  );
}
