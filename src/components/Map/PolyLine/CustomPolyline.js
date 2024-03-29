import { useState, useRef } from "react";
import {
  FeatureGroup,
  MapContainer,
  Marker,
  Polyline,
  TileLayer,
  LayerGroup,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  customMarkerUserPos,
  customMarkerHalle77Pos,
} from "../Markers/CustomMarker";

const halle77 = [51.507372, 7.491431];
const blueOptions = { color: "#6eb8b3", fillColor: "g#6eb8b3", weight: 1 };

const CustomPolyLine = ({ plates }) => {
  const mapRef = useRef();
  const [center, setCenter] = useState({
    lat: 51.2,
    lng: 10.338379,
  });
  const [map, setMap] = useState(null);

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
    <div className="max-h-full pt-2 pb-16 lg:pb-20 bg-secondary">
      <MapContainer
        // style={{ height: "480px", width: "100%" }}
        style={{
          height: "80vh",
          width: "100vw",
          borderRadius: "16px",
          margin: "auto",
        }}
        zoom={6}
        center={center}
        ref={mapRef}
        whenReady={setMap}
        scrollWheelZoom={true}
      >
        <LayerGroup>
          <Marker
            position={[halle77[0], halle77[1]]}
            icon={customMarkerHalle77Pos}
          />
        </LayerGroup>
        {plates?.map((mark, i) => (
          <FeatureGroup key={i}>
            <Popup>
              <div>
                <h2>Kennzeichen: {mark.kz}</h2>
                <p>
                  {mark.name} -{" "}
                  {distance(halle77[0], halle77[1], mark.lat, mark.lng, "K")}
                  km Luftlinie
                </p>
              </div>
            </Popup>
            <Marker
              position={[mark.lat, mark.lng]}
              icon={customMarkerUserPos}
            />
            <Polyline
              pathOptions={blueOptions}
              positions={[
                [mark.lat, mark.lng],
                [halle77[0], halle77[1]],
              ]}
            />
          </FeatureGroup>
        ))}

        <TileLayer
          attribution='Daten von <a href="https://www.openstreetmap.org/">OpenStreetMap</a> - Veröffentlicht unter <a href="https://opendatacommons.org/licenses/odbl/ target="_blank" rel="noopener noreferrer">ODbL</a>'
          url="https://a.tile.openstreetmap.de/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default CustomPolyLine;
